"use client"

import { GraduationCap, Bell, User, Sun, Moon, Menu, X, LogOut, Mail, CreditCard, Settings, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import { useSubscription } from "@/context/subscription-context"
import { motion, AnimatePresence } from "framer-motion"

export function Header() {
  const { subscription, setSubscription } = useSubscription()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => setMounted(true), [])

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  const closeSidebar = () => {
    setSidebarOpen(false)
  }

  const handleLogout = () => {
    // Add your logout logic here
    console.log("User logged out")
    closeSidebar()
  }

  if (!mounted) return null

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 dark:bg-gray-950/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-950/60">
        <div className=" flex h-[80px] items-center justify-between px-4">

          <Link href="/" className="flex items-center shadow-2xl">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-2xl">
              <span className="text-white font-bold text-xl">P</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-5">
            <Link href="/directory" className="text-sm font-medium hover:text-purple-600 transition-colors">
              Directory
            </Link>
            <Link href="/creators" className="text-sm font-medium hover:text-purple-600 transition-colors">
              Creators
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-purple-600 transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            {/* Theme Toggle Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full hidden sm:flex"
              aria-label="Toggle theme"
            >
              {mounted ? (
                theme === "dark" ? (
                  <Sun className="w-5 h-5 transition-all duration-300 hover:scale-110" />
                ) : (
                  <Moon className="w-5 h-5 transition-all duration-300 hover:scale-110" />
                )
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </Button>

            <Button variant="ghost" size="icon" className="relative hidden sm:flex">
              <Bell className="w-5 h-5" />
              <div className="absolute -top-[2px] -right-[2px] w-2 h-2 bg-blue-800 rounded-full" />
            </Button>

            {/* <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
              Sign Up Free
            </Button> */}

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full hidden sm:flex">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-blue-400 flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <div className="px-2 py-1.5 text-sm font-medium border-b mb-1">
                  <span className="text-xs text-gray-500">Subscription:</span>
                  <div className="flex items-center gap-1 mt-1">
                    <span className="text-xs px-2 py-1 rounded bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">
                      {subscription === 'basic' && 'Basic'}
                      {subscription === 'premium' && 'Premium'}
                      {subscription === 'unlimited' && 'Unlimited'}
                    </span>
                    <Link href="/pricing">
                      <Button variant="link" className="text-xs p-0 h-auto">
                        Upgrade
                      </Button>
                    </Link>
                  </div>
                </div>
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSubscription('basic')}>Set Basic</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSubscription('premium')}>Set Premium</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSubscription('unlimited')}>Set Unlimited</DropdownMenuItem>
                <DropdownMenuItem>Sign out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleSidebar}
            aria-label="Open menu"
          >
            {sidebarOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </Button>
        </div>
      </header>

      {/* Mobile Sidebar - Placed outside the main header */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={closeSidebar}
            />

            <motion.div
              initial={{ x: '-100%' }}
              animate={{
                x: 0,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 30
                }
              }}
              exit={{ x: '-100%', transition: { duration: 0.2 } }}
              className="fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-900 shadow-2xl z-50 md:hidden overflow-y-auto"
            >
              <div className="p-4 border-b border-gray-200 dark:border-gray-800">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                      <GraduationCap className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                      ND2 Directory
                    </span>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={closeSidebar}
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                <div className="">
                  <Link href="/pricing" className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 transition-colors mb-2">
                    Go Pro
                  </Link>
                </div>
              </div>

              <nav className="p-4">
                <div className="space-y-2">
                  <Link
                    href="/directory"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    onClick={closeSidebar}
                  >
                    <Users className="w-5 h-5 text-blue-500" />
                    <span>Directory</span>
                  </Link>

                  <Link
                    href="/creators"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    onClick={closeSidebar}
                  >
                    <User className="w-5 h-5 text-cyan-500" />
                    <span>Creators</span>
                  </Link>

                  <Link
                    href="/contact"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    onClick={closeSidebar}
                  >
                    <Mail className="w-5 h-5 text-yellow-500" />
                    <span>Contact</span>
                  </Link>

                  <Link
                    href="/pricing"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    onClick={closeSidebar}
                  >
                    <CreditCard className="w-5 h-5 text-green-500" />
                    <span>Pricing</span>
                  </Link>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-800">
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer">
                    <Sun className="w-5 h-5 text-orange-500" />
                    <span>Light Mode</span>
                    <div className="ml-auto">
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full"
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                      >
                        {theme === "dark" ? (
                          <Sun className="w-4 h-4" />
                        ) : (
                          <Moon className="w-4 h-4" />
                        )}
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    <Bell className="w-5 h-5 text-pink-500" />
                    <span>Notifications</span>
                    <div className="ml-auto w-2 h-2 bg-blue-800 rounded-full" />
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    <User className="w-5 h-5 text-green-500" />
                    <span>Profile</span>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    <Settings className="w-5 h-5 text-gray-500" />
                    <span>Settings</span>
                  </div>

                  <div
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
                    onClick={handleLogout}
                  >
                    <LogOut className="w-5 h-5 text-red-500" />
                    <span>Logout</span>
                  </div>
                </div>
              </nav>

              <div className="p-4 border-t border-gray-200 dark:border-gray-800">
                <div className="text-sm font-medium mb-2">Subscription:</div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 text-purple-700 dark:text-purple-300">
                    {subscription === 'basic' && 'Basic'}
                    {subscription === 'premium' && 'Premium'}
                    {subscription === 'unlimited' && 'Unlimited'}
                  </span>
                  <Link href="/pricing" className="text-xs text-purple-600 dark:text-purple-400 hover:underline">
                    Upgrade
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

// when used clerk for their authentication, when users is not authenticated, hide the profile icons, notificationa and display only the sign up free button, but if authenticated, hide the sign up free button and show the notifcations and profile icons as well