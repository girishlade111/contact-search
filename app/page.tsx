"use client"

import { useState } from "react"
import { Search, ChevronDown, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import ContactList from "@/components/contact-list"
import FilterSidebar from "@/components/filter-sidebar"

export default function ContactSearchPage() {
  const [showFilters, setShowFilters] = useState(true)
  const [searchCategory, setSearchCategory] = useState("Contacts")
  const [searchInResults, setSearchInResults] = useState(true)
  const [activeTab, setActiveTab] = useState("contacts")

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-6">
        {/* Search Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 gap-4">
          <h1 className="text-2xl font-bold">Search</h1>

          <div className="flex items-center gap-2 flex-1 max-w-4xl">
            <div className="relative flex-1">
              <div className="border rounded-md flex items-center flex-wrap sm:flex-nowrap">
                <div className="px-2 sm:px-4 py-2 flex items-center gap-2 border-r">
                  <span className="text-sm sm:text-base">{searchCategory}</span>
                  <ChevronDown className="h-4 w-4" />
                </div>
                {searchInResults && (
                  <div className="flex items-center px-2 sm:px-3 py-2 gap-2 border-r bg-gray-100 text-gray-600 text-xs sm:text-sm">
                    <span>Search in results</span>
                    <button className="text-gray-400" onClick={() => setSearchInResults(false)}>
                      ×
                    </button>
                  </div>
                )}
                <Input
                  className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-sm h-9"
                  placeholder="Search"
                />
              </div>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-1">
                <Search className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500" />
              </div>
            </div>

            <Button
              variant="ghost"
              className="text-blue-600 hidden sm:flex"
              onClick={() => {
                setSearchInResults(false)
              }}
            >
              Clear all
            </Button>

            <div className="hidden sm:flex items-center gap-1 text-blue-600 ml-2">
              <Info className="h-5 w-5" />
              <span>How it works?</span>
              <Badge className="bg-blue-100 text-blue-600 text-xs ml-1 px-1">Beta</Badge>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b mb-4">
          <div className="flex overflow-x-auto">
            <button
              className={`flex items-center gap-2 px-3 sm:px-4 py-3 whitespace-nowrap ${activeTab === "contacts" ? "border-b-2 border-blue-600 text-blue-600 font-medium" : "text-gray-500"}`}
              onClick={() => setActiveTab("contacts")}
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 12.75C8.83 12.75 6.25 10.17 6.25 7C6.25 3.83 8.83 1.25 12 1.25C15.17 1.25 17.75 3.83 17.75 7C17.75 10.17 15.17 12.75 12 12.75ZM12 2.75C9.66 2.75 7.75 4.66 7.75 7C7.75 9.34 9.66 11.25 12 11.25C14.34 11.25 16.25 9.34 16.25 7C16.25 4.66 14.34 2.75 12 2.75Z"
                  fill="currentColor"
                />
                <path
                  d="M3.41 22.75C3 22.75 2.66 22.41 2.66 22C2.66 17.73 6.73 14.25 12 14.25C17.27 14.25 21.34 17.73 21.34 22C21.34 22.41 21 22.75 20.59 22.75C20.18 22.75 19.84 22.41 19.84 22C19.84 18.55 16.36 15.75 12 15.75C7.64 15.75 4.16 18.55 4.16 22C4.16 22.41 3.82 22.75 3.41 22.75Z"
                  fill="currentColor"
                />
              </svg>
              <span>Contacts (744,990)</span>
            </button>
            <button
              className={`flex items-center gap-2 px-3 sm:px-4 py-3 whitespace-nowrap ${activeTab === "companies" ? "border-b-2 border-blue-600 text-blue-600 font-medium" : "text-gray-500"}`}
              onClick={() => setActiveTab("companies")}
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M22 8.52V3.98C22 2.57 21.36 2 19.77 2H15.73C14.14 2 13.5 2.57 13.5 3.98V8.51C13.5 9.93 14.14 10.49 15.73 10.49H19.77C21.36 10.5 22 9.93 22 8.52Z"
                  fill="currentColor"
                  fillOpacity="0.4"
                />
                <path
                  d="M22 19.77V15.73C22 14.14 21.36 13.5 19.77 13.5H15.73C14.14 13.5 13.5 14.14 13.5 15.73V19.77C13.5 21.36 14.14 22 15.73 22H19.77C21.36 22 22 21.36 22 19.77Z"
                  fill="currentColor"
                  fillOpacity="0.4"
                />
                <path
                  d="M10.5 8.52V3.98C10.5 2.57 9.86 2 8.27 2H4.23C2.64 2 2 2.57 2 3.98V8.51C2 9.93 2.64 10.49 4.23 10.49H8.27C9.86 10.5 10.5 9.93 10.5 8.52Z"
                  fill="currentColor"
                  fillOpacity="0.4"
                />
                <path
                  d="M10.5 19.77V15.73C10.5 14.14 9.86 13.5 8.27 13.5H4.23C2.64 13.5 2 14.14 2 15.73V19.77C2 21.36 2.64 22 4.23 22H8.27C9.86 22 10.5 21.36 10.5 19.77Z"
                  fill="currentColor"
                  fillOpacity="0.4"
                />
              </svg>
              <span>Companies</span>
            </button>
            <div className="ml-auto flex gap-2 sm:gap-4">
              <Button variant="ghost" className="text-gray-800 text-xs sm:text-sm whitespace-nowrap">
                Recent activity
              </Button>
              <Button variant="ghost" className="text-gray-800 text-xs sm:text-sm whitespace-nowrap">
                Saved searches
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Filter Toggle */}
        <div className="sm:hidden mb-4">
          <Button
            variant="outline"
            className="w-full flex items-center justify-between"
            onClick={() => setShowFilters(!showFilters)}
          >
            <span>Filters (4)</span>
            <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? "transform rotate-180" : ""}`} />
          </Button>
        </div>

        {/* Main Content */}
        <div className="flex flex-col sm:flex-row gap-4">
          {(showFilters || window.innerWidth >= 640) && (
            <div className="w-full sm:w-[350px]">
              <FilterSidebar />
            </div>
          )}
          <div className="flex-1 border rounded-md">
            <ContactList />
          </div>
        </div>
      </div>
    </div>
  )
}
