import { redirect } from "next/navigation"
import { getSession } from "@/lib/session"
import { db } from "@/lib/db"
import { user } from "@/lib/db/schema"
import { LoginForm } from "@/components/admin/login-form"
import { HardHat } from "lucide-react"

export const dynamic = "force-dynamic"

export default async function AdminLoginPage() {
  const session = await getSession()
  if (session?.user) redirect("/admin")

  const existing = await db.select({ id: user.id }).from(user).limit(1)
  const needsSetup = existing.length === 0

  return (
    <main className="flex min-h-svh flex-col items-center justify-center gap-8 bg-secondary px-4 py-16">
      <div className="flex flex-col items-center gap-3 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <HardHat className="h-7 w-7" />
        </div>
        <div>
          <p className="font-serif text-xl font-semibold text-foreground">D Techno Constructions</p>
          <p className="text-sm text-muted-foreground">Content Management Portal</p>
        </div>
      </div>
      <LoginForm needsSetup={needsSetup} />
    </main>
  )
}
