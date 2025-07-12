"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Mail, Phone, User, GraduationCap, Award, Heart } from "lucide-react"
import type { Student } from "@/lib/data";
import Image from "next/image"
import { PremiumBlur } from "./premium-blur"

interface StudentProfileModalProps {
  student: Student | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function StudentProfileModal({ student, open, onOpenChange }: StudentProfileModalProps) {
  if (!student) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent aria-describedby="" className="max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-900 border-0 shadow-2xl">

        <DialogHeader className="relative z-10">
          <div className="flex flex-col items-center space-y-4 pb-4">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-400 via-blue-400 to-cyan-400 p-1 shadow-2xl">
                <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center shadow-2xl">
                  <Image
                    src={student.avatar || "/images/default.png"}
                    alt={`${student.name}'s profile picture`}
                    width={88}
                    height={88}
                    className="w-22 h-22 rounded-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute bottom-1 right-2 w-4 h-4 bg-green-500 rounded-full border-3 border-white dark:border-gray-900" />
            </div>

            <div className="text-center space-y-2">
              <DialogTitle className="text-2xl font-bold text-black dark:text-white">
                {student.name}
              </DialogTitle>
              <Badge
                variant="secondary"
                className="bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 text-purple-700 dark:text-purple-300 border-0"
              >
                {student.department}
              </Badge>
            </div>
          </div>
        </DialogHeader>

        <div className="relative z-10 space-y-6">
          
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2 text-gray-900 dark:text-gray-100">
              <Mail className="w-5 h-5 text-purple-500" />
              Contact Information
            </h3>
            <div className="grid gap-3 pl-7">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-gray-500" />
                <span className="text-gray-700 dark:text-gray-300">{student.email}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-gray-500" />
                <span className="text-gray-700 dark:text-gray-300">{student.phone}</span>
              </div>
            </div>
          </div>

          <Separator className="bg-gradient-to-r from-purple-200 to-blue-200 dark:from-purple-800 dark:to-blue-800" />

          {/* Academic Details - GPA blurred for non-premium */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2 text-gray-900 dark:text-gray-100">
              <GraduationCap className="w-5 h-5 text-blue-500" />
              Academic Details
            </h3>
            <div className="grid gap-3 pl-7">
              <div className="flex items-center gap-3 text-sm">
                <User className="w-4 h-4 text-gray-500" />
                <span className="text-gray-500">Year of Study:</span>
                <span className="text-gray-700 dark:text-gray-300 font-medium">{student.year}</span>
              </div>
              <PremiumBlur>
                <div className="flex items-center gap-3 text-sm">
                  <Award className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-500">GPA:</span>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{student.gpa}</span>
                </div>
              </PremiumBlur>
            </div>
          </div>

          <Separator className="bg-gradient-to-r from-purple-200 to-blue-200 dark:from-purple-800 dark:to-blue-800" />

          {/* Extracurricular Activities - Blurred for non-premium */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2 text-gray-900 dark:text-gray-100">
              <Heart className="w-5 h-5 text-pink-500" />
              Extracurricular Activities
            </h3>
            <PremiumBlur>
            <p className="text-sm text-gray-700 dark:text-gray-300 pl-7 leading-relaxed">{student.activities}</p>
            </PremiumBlur>
          </div>

          <Separator className="bg-gradient-to-r from-purple-200 to-blue-200 dark:from-purple-800 dark:to-blue-800" />

          {/* Personal Bio - Blurred for non-premium */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2 text-gray-900 dark:text-gray-100">
              <User className="w-5 h-5 text-cyan-500" />
              Personal Bio
            </h3>
            <PremiumBlur>
            <p className="text-sm text-gray-700 dark:text-gray-300 pl-7 leading-relaxed">{student.bio}</p>
            </PremiumBlur>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
