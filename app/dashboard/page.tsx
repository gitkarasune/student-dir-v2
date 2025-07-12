"use client"

import { useState } from "react"
import { StudentCard } from "@/components/student-card"
import { StudentProfileModal } from "@/components/student-profile-modal"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, Grid, List, Users, GraduationCap } from "lucide-react"
import { students, departments, type Student } from "@/lib/data"

export default function Dashboard() {
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedDepartment, setSelectedDepartment] = useState("All Departments")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const filteredStudents = students.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.department.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesDepartment = selectedDepartment === "All Departments" || student.department === selectedDepartment
    return matchesSearch && matchesDepartment
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 text-black dark:text-white">

      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-cyan-500/10" />
        <div className="relative z-10 container mx-auto max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <GraduationCap className="w-5 h-5 text-purple-500" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Kenule Benson Saro-Wiwa Polytechnic
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="">
              ND2 Student Directory
            </span>
          </h1>

          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Connect with your classmates, explore profiles, and build lasting relationships within our ND2 community.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Badge
              variant="secondary"
              className="bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 text-purple-700 dark:text-purple-300 border-0 px-4 py-2"
            >
              <Users className="w-4 h-4 mr-2" />
              {students.length} Students
            </Badge>
            <Badge
              variant="secondary"
              className="bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 text-blue-700 dark:text-blue-300 border-0 px-4 py-2"
            >
              <GraduationCap className="w-4 h-4 mr-2" />
              {departments.length - 1} Departments
            </Badge>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-gray-800/20 shadow-2xl">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              <div className="flex flex-col sm:flex-row gap-4 flex-1">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    placeholder="Search by name or department..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                  />
                </div>

                <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                  <SelectTrigger className="w-full sm:w-64 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                    <Filter className="w-4 h-4 mr-2" />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {departments.map((dept) => (
                      <SelectItem key={dept} value={dept}>
                        {dept}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex gap-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="icon"
                  onClick={() => setViewMode("grid")}
                  className={viewMode === "grid" ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white" : ""}
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="icon"
                  onClick={() => setViewMode("list")}
                  className={viewMode === "list" ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white" : ""}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Students Grid */}
      <section className="py-8 px-4 pb-20">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Our Students</h2>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {filteredStudents.length} of {students.length} students
            </span>
          </div>

          {filteredStudents.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 flex items-center justify-center">
                <Search className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">No students found</h3>
              <p className="text-gray-500 dark:text-gray-400">Try adjusting your search criteria or filters.</p>
            </div>
          ) : (
            <div
              className={`grid gap-6 ${
                viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3" : "grid-cols-1"
              }`}
            >
              {filteredStudents.map((student) => (
                <StudentCard key={student.id} student={student} onViewProfile={setSelectedStudent} />
              ))}
            </div>
          )}
        </div>
      </section>

      <StudentProfileModal
        student={selectedStudent}
        open={!!selectedStudent}
        onOpenChange={(open) => !open && setSelectedStudent(null)}
      />
    </div>
  )
}
