"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Lock } from "lucide-react"
import { useSubscription } from "@/context/subscription-context"

interface PremiumBlurProps {
  children: React.ReactNode
  requiredPlan?: 'premium' | 'unlimited'
}

export function PremiumBlur({ children, requiredPlan = 'premium' }: PremiumBlurProps) {
  const [hovered, setHovered] = useState(false)
  const { subscription } = useSubscription() // Get subscription from context


  if (subscription === 'unlimited' || 
      (requiredPlan === 'premium' && subscription === 'premium')) {
    return <>{children}</>
  }

  return (
    <div 
      className="relative overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={`transition-all duration-300 ${hovered ? 'blur-sm' : 'blur-md'}`}>
        {children}
      </div>
      
      {hovered && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black/20 dark:bg-black/40 backdrop-blur-sm p-4 rounded-lg">
          <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2">
            <Lock className="w-4 h-4 mr-2" />
            Premium Content
          </Badge>
          <p className="text-center font-medium text-lg">
            Upgrade to {requiredPlan === 'premium' ? 'Premium' : 'Unlimited'} to view this content
          </p>
          <Link href="/pricing">
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700">
              Subscribe Now
            </Button>
          </Link>
        </div>
      )}
    </div>
  )
}