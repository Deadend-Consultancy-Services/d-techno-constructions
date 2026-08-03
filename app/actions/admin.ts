"use server"

import { db } from "@/lib/db"
import { companyInfo, stats, services, projects, inquiries } from "@/lib/db/schema"
import { requireAdmin } from "@/lib/session"
import { asc, desc, eq } from "drizzle-orm"
import { revalidatePath } from "next/cache"
import { put, del } from "@vercel/blob"

function revalidateAll() {
  revalidatePath("/")
  revalidatePath("/admin")
}

/* ---------------- Company info ---------------- */

export async function updateCompanyInfo(formData: FormData) {
  await requireAdmin()
  const values = {
    name: String(formData.get("name") ?? ""),
    tagline: String(formData.get("tagline") ?? ""),
    slogan: String(formData.get("slogan") ?? ""),
    about: String(formData.get("about") ?? ""),
    phone: String(formData.get("phone") ?? ""),
    email: String(formData.get("email") ?? ""),
    addressLine1: String(formData.get("addressLine1") ?? ""),
    addressLine2: String(formData.get("addressLine2") ?? ""),
    city: String(formData.get("city") ?? ""),
    updatedAt: new Date(),
  }
  await db.update(companyInfo).set(values).where(eq(companyInfo.id, 1))
  revalidateAll()
  return { success: true }
}

/* ---------------- Stats ---------------- */

export async function createStat(formData: FormData) {
  await requireAdmin()
  await db.insert(stats).values({
    label: String(formData.get("label") ?? ""),
    value: String(formData.get("value") ?? ""),
    sortOrder: Number(formData.get("sortOrder") ?? 0),
  })
  revalidateAll()
  return { success: true }
}

export async function updateStat(formData: FormData) {
  await requireAdmin()
  const id = Number(formData.get("id"))
  await db
    .update(stats)
    .set({
      label: String(formData.get("label") ?? ""),
      value: String(formData.get("value") ?? ""),
      sortOrder: Number(formData.get("sortOrder") ?? 0),
    })
    .where(eq(stats.id, id))
  revalidateAll()
  return { success: true }
}

export async function deleteStat(id: number) {
  await requireAdmin()
  await db.delete(stats).where(eq(stats.id, id))
  revalidateAll()
  return { success: true }
}

/* ---------------- Services ---------------- */

export async function createService(formData: FormData) {
  await requireAdmin()
  await db.insert(services).values({
    title: String(formData.get("title") ?? ""),
    description: String(formData.get("description") ?? ""),
    icon: String(formData.get("icon") ?? "Building2"),
    sortOrder: Number(formData.get("sortOrder") ?? 0),
  })
  revalidateAll()
  return { success: true }
}

export async function updateService(formData: FormData) {
  await requireAdmin()
  const id = Number(formData.get("id"))
  await db
    .update(services)
    .set({
      title: String(formData.get("title") ?? ""),
      description: String(formData.get("description") ?? ""),
      icon: String(formData.get("icon") ?? "Building2"),
      sortOrder: Number(formData.get("sortOrder") ?? 0),
    })
    .where(eq(services.id, id))
  revalidateAll()
  return { success: true }
}

export async function deleteService(id: number) {
  await requireAdmin()
  await db.delete(services).where(eq(services.id, id))
  revalidateAll()
  return { success: true }
}

/* ---------------- Projects (gallery) ---------------- */

export async function createProject(formData: FormData) {
  await requireAdmin()

  const file = formData.get("image") as File | null
  let imageUrl = String(formData.get("imageUrl") ?? "")

  if (file && file.size > 0) {
    const blob = await put(`projects/${Date.now()}-${file.name}`, file, { access: "public" })
    imageUrl = blob.url
  }

  if (!imageUrl) {
    return { success: false, error: "An image is required." }
  }

  await db.insert(projects).values({
    title: String(formData.get("title") ?? ""),
    category: String(formData.get("category") ?? ""),
    description: String(formData.get("description") ?? ""),
    imageUrl,
    sortOrder: Number(formData.get("sortOrder") ?? 0),
  })
  revalidateAll()
  return { success: true }
}

export async function updateProject(formData: FormData) {
  await requireAdmin()
  const id = Number(formData.get("id"))

  const file = formData.get("image") as File | null
  let imageUrl = String(formData.get("imageUrl") ?? "")

  if (file && file.size > 0) {
    const blob = await put(`projects/${Date.now()}-${file.name}`, file, { access: "public" })
    imageUrl = blob.url
  }

  await db
    .update(projects)
    .set({
      title: String(formData.get("title") ?? ""),
      category: String(formData.get("category") ?? ""),
      description: String(formData.get("description") ?? ""),
      imageUrl,
      sortOrder: Number(formData.get("sortOrder") ?? 0),
    })
    .where(eq(projects.id, id))
  revalidateAll()
  return { success: true }
}

export async function deleteProject(id: number) {
  await requireAdmin()
  const [row] = await db.select().from(projects).where(eq(projects.id, id)).limit(1)
  if (row?.imageUrl?.startsWith("https://") && row.imageUrl.includes("blob.vercel-storage.com")) {
    try {
      await del(row.imageUrl)
    } catch {
      // ignore blob deletion errors
    }
  }
  await db.delete(projects).where(eq(projects.id, id))
  revalidateAll()
  return { success: true }
}

/* ---------------- Inquiries ---------------- */

export async function createInquiry(formData: FormData) {
  // public action — no admin required
  const name = String(formData.get("name") ?? "").trim()
  const message = String(formData.get("message") ?? "").trim()
  if (!name || !message) {
    return { success: false, error: "Name and message are required." }
  }
  await db.insert(inquiries).values({
    name,
    email: String(formData.get("email") ?? "").trim(),
    phone: String(formData.get("phone") ?? "").trim(),
    message,
  })
  revalidatePath("/admin")
  return { success: true }
}

export async function markInquiryRead(id: number, isRead: boolean) {
  await requireAdmin()
  await db.update(inquiries).set({ isRead }).where(eq(inquiries.id, id))
  revalidatePath("/admin")
  return { success: true }
}

export async function deleteInquiry(id: number) {
  await requireAdmin()
  await db.delete(inquiries).where(eq(inquiries.id, id))
  revalidatePath("/admin")
  return { success: true }
}

/* ---------------- Read helpers ---------------- */

export async function getAdminData() {
  await requireAdmin()
  const [company] = await db.select().from(companyInfo).where(eq(companyInfo.id, 1)).limit(1)
  const statList = await db.select().from(stats).orderBy(asc(stats.sortOrder))
  const serviceList = await db.select().from(services).orderBy(asc(services.sortOrder))
  const projectList = await db.select().from(projects).orderBy(asc(projects.sortOrder), desc(projects.createdAt))
  const inquiryList = await db.select().from(inquiries).orderBy(desc(inquiries.createdAt))
  return { company, statList, serviceList, projectList, inquiryList }
}
