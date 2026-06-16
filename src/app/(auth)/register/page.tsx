'use client'

import { signUp } from '@/actions/auth'
import Link from 'next/link'
import { useState } from 'react'

export default function RegisterPage() {
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(formData: FormData) {
    setLoading(true)
    setError(null)
    const result = await signUp(formData)
    if (result?.error) {
      setError(result.error)
      setLoading(false)
    }
  }

  return (
    <>
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-white">CodeAtlas 🚀</h1>
        <p className="text-gray-400 mt-2">Crée ton compte</p>
      </div>

      <form action={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm text-gray-400 mb-1">Email</label>
          <input
            name="email"
            type="email"
            required
            className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
            placeholder="toi@exemple.com"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-1">Mot de passe</label>
          <input
            name="password"
            type="password"
            required
            minLength={6}
            className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
            placeholder="6 caractères minimum"
          />
        </div>

        {error && (
          <p className="text-red-400 text-sm">{error}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-semibold rounded-lg transition"
        >
          {loading ? 'Création...' : 'Créer mon compte'}
        </button>
      </form>

      <p className="text-center text-gray-400 text-sm mt-6">
        Déjà un compte ?{' '}
        <Link href="/login" className="text-blue-400 hover:underline">
          Se connecter
        </Link>
      </p>
    </>
  )
}
