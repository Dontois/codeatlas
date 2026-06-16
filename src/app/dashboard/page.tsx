import { createClient } from '@/lib/supabase/server'
import { signOut } from '@/actions/auth'

export default async function DashboardPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">CodeAtlas 🚀</h1>
        <p className="text-gray-400 mb-8">Bienvenue, {user?.email}</p>

        <div className="bg-gray-900 rounded-2xl p-6 mb-6">
          <p className="text-green-400 font-semibold">
            ✅ Authentification fonctionnelle
          </p>
          <p className="text-gray-400 text-sm mt-1">
            La Phase 1 est complète. On va maintenant construire la vraie interface.
          </p>
        </div>

        <form action={signOut}>
          <button
            type="submit"
            className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg text-sm font-medium transition"
          >
            Se déconnecter
          </button>
        </form>
      </div>
    </div>
  )
}
