"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Mail, Phone, User } from "lucide-react"
import type { Student } from "@/lib/data"
import Image from "next/image"

interface StudentCardProps {
  student: Student
  onViewProfile: (student: Student) => void
}

export function StudentCard({ student, onViewProfile }: StudentCardProps) {
  return (
    <Card className="group relative overflow-hidden bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 text-black dark:text-white border-0 shadow-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />


      <CardContent className="p-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-400 via-blue-400 to-cyan-400 p-0.5">
              <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
                <Image
                  src={student.avatar || "/images/default.png"}
                  alt={`${student.name}'s profile picture`}
                  width={76}
                  height={76}
                  className="w-19 h-19 rounded-full object-cover"
                />
              </div>
            </div>
            <div className="absolute bottom-1 right-2 w-4 h-4 bg-green-500 rounded-full border-3 border-white dark:border-gray-900" />
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
              {student.name}
            </h3>
            <Badge
              variant="secondary"
              className="bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 text-purple-700 dark:text-purple-300 border-0"
            >
              {student.department}
            </Badge>
            <div className="flex items-center justify-center gap-1 text-sm text-gray-600 dark:text-gray-400">
              <User className="w-4 h-4" />
              <span>{student.year}</span>
            </div>
          </div>

          <div className="flex flex-col gap-2 w-full">
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <Mail className="w-4 h-4 flex-shrink-0" />
              <span className="truncate">{student.email}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <Phone className="w-4 h-4 flex-shrink-0" />
              <span>{student.phone}</span>
            </div>
          </div>

          <Button
            onClick={() => onViewProfile(student)}
            className="w-full  border-0 shadow-md hover:shadow-lg transition-all duration-300 " size={"lg"}
          >
            View Profile
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
