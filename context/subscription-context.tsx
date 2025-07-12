"use client"

import { createContext, useContext, useState, ReactNode } from "react"

type SubscriptionPlan = 'basic' | 'premium' | 'unlimited'

interface SubscriptionContextType {
  subscription: SubscriptionPlan
  setSubscription: (plan: SubscriptionPlan) => void
}

const SubscriptionContext = createContext<SubscriptionContextType | undefined>(undefined)

export function SubscriptionProvider({ children }: { children: ReactNode }) {
  const [subscription, setSubscription] = useState<SubscriptionPlan>('basic')

  return (
    <SubscriptionContext.Provider value={{ subscription, setSubscription }}>
      {children}
    </SubscriptionContext.Provider>
  )
}

export function useSubscription() {
  const context = useContext(SubscriptionContext)
  if (context === undefined) {
    throw new Error('useSubscription must be used within a SubscriptionProvider')
  }
  return context
}