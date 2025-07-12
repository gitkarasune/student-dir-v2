"use client"

import { useState } from "react"
import { StudentCard } from "@/components/student-card"
import { StudentProfileModal } from "@/components/student-profile-modal"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, Grid, List } from "lucide-react"
import { students, departments, type Student } from "@/lib/data";

export default function DirectoryPage() {
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

      <div className="container mx-auto max-w-6xl px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            <span className="">
              Student Directory
            </span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Explore the diverse student body at Kenule Benson Saro-Wiwa Polytechnic ND2 class.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/20 dark:border-gray-800/20 mb-8">
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
                className={viewMode === "grid" ? "bg-blue-500 text-white" : ""}
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("list")}
                className={viewMode === "list" ? "bg-blue-500 text-white" : ""}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold">
            Students ({filteredStudents.length})
          </h2>
        </div>

        {filteredStudents.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 flex items-center justify-center">
              <Search className="w-8 h-8 text-purple-500" />
            </div>
            <h3 className="text-lg font-semibold mb-2">No students found</h3>
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

      <StudentProfileModal
        student={selectedStudent}
        open={!!selectedStudent}
        onOpenChange={(open) => !open && setSelectedStudent(null)}
      />
    </div>
  )
}
