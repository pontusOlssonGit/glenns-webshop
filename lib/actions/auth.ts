'use server'

import { createClient } from '@/lib/supabase/server'
import { refresh, revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function login(formData: FormData) {
  const supabase = await createClient()
  
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    redirect('/login?message=Could not authenticate user')
  }
 
  revalidatePath('/', 'layout') 
  redirect('/')

}

export async function signup(formData: FormData) {
  const supabase = await createClient()

  const email = formData.get('email') as string
  const password = formData.get('password') as string

  const { error } = await supabase.auth.signUp({
    email,
    password,
  })
  
  if (error) {
    redirect('/signup?message=Could not create user')
  }

  revalidatePath('/')
  redirect('/login?message=User created, please log in')
}

export async function signOut() {
  const supabase = await createClient()

  const { error } = await supabase.auth.signOut()

  if (error) {
    console.error('Error signing out:', error.message)
  }

  revalidatePath('/')
  redirect('/login')
}