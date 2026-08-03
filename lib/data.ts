import { db } from "@/lib/db"
import { companyInfo, stats, services, projects } from "@/lib/db/schema"
import { asc, desc, eq } from "drizzle-orm"

export async function getCompanyInfo() {
  const [company] = await db.select().from(companyInfo).where(eq(companyInfo.id, 1)).limit(1)
  return company ?? null
}

export async function getStats() {
  return db.select().from(stats).orderBy(asc(stats.sortOrder))
}

export async function getServices() {
  return db.select().from(services).orderBy(asc(services.sortOrder))
}

export async function getProjects() {
  return db.select().from(projects).orderBy(asc(projects.sortOrder), desc(projects.createdAt))
}
