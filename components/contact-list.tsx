"use client"

import { useState } from "react"
import { ChevronDown, ChevronLeft, ChevronRight, Phone, Mail, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"

export default function ContactList() {
  const [selected, setSelected] = useState(0)

  return (
    <div className="w-full">
      {/* Table Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-2">
          <Checkbox id="select-all" />
          <ChevronDown className="h-4 w-4 text-gray-500" />
          <span className="text-sm font-medium">{selected} selected</span>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="secondary" className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300">
            Show details
            <ChevronDown className="h-4 w-4" />
          </Button>

          <Button variant="outline" className="flex items-center gap-2 ml-2">
            Actions
            <ChevronDown className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Table Column Headers */}
      <div className="grid grid-cols-12 gap-4 px-4 py-3 border-b text-sm font-medium text-gray-600">
        <div className="col-span-4">Contact</div>
        <div className="col-span-4">Data points</div>
        <div className="col-span-4">Company</div>
      </div>

      {/* Contact Rows */}
      <div className="divide-y">
        {/* Contact 1 */}
        <div className="grid grid-cols-12 gap-4 px-4 py-4 hover:bg-gray-50">
          <div className="col-span-4 flex items-center gap-3">
            <Checkbox id="contact-1" />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Geoffrey Thyne</span>
                <svg
                  className="h-4 w-4 text-blue-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
                    fill="#0A66C2"
                  />
                  <path
                    d="M16 17.25H14.25C13.84 17.25 13.5 16.91 13.5 16.5V13C13.5 12.59 13.16 12.25 12.75 12.25H11.25C10.84 12.25 10.5 12.59 10.5 13V16.5C10.5 16.91 10.16 17.25 9.75 17.25H8C7.59 17.25 7.25 16.91 7.25 16.5V10.25C7.25 9.64 7.64 9.25 8.25 9.25H16.25C16.86 9.25 17.25 9.64 17.25 10.25V16.5C17.25 16.91 16.91 17.25 16.5 17.25H16Z"
                    fill="#0A66C2"
                  />
                  <path
                    d="M12 8.75C11.04 8.75 10.25 7.96 10.25 7C10.25 6.04 11.04 5.25 12 5.25C12.96 5.25 13.75 6.04 13.75 7C13.75 7.96 12.96 8.75 12 8.75Z"
                    fill="#0A66C2"
                  />
                </svg>
              </div>
              <div className="text-gray-600">Chief Technology Officer</div>
            </div>
          </div>
          <div className="col-span-4 flex items-center gap-3">
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <Phone className="h-4 w-4 text-gray-600" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <Mail className="h-4 w-4 text-gray-600" />
              </Button>
            </div>
          </div>
          <div className="col-span-4 flex items-center gap-3">
            <div className="h-8 w-8 bg-blue-100 rounded-md flex items-center justify-center text-blue-600 font-bold">
              ES
            </div>
            <div>
              <div className="font-medium">Engineered Salinity - ESal</div>
              <div className="text-gray-600 text-sm">
                Oil, Gas & Mining, Oil & Gas <span className="text-gray-400">+1</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact 2 */}
        <div className="grid grid-cols-12 gap-4 px-4 py-4 hover:bg-gray-50">
          <div className="col-span-4 flex items-center gap-3">
            <Checkbox id="contact-2" />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Shayne Coplan</span>
                <svg
                  className="h-4 w-4 text-blue-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
                    fill="#0A66C2"
                  />
                  <path
                    d="M16 17.25H14.25C13.84 17.25 13.5 16.91 13.5 16.5V13C13.5 12.59 13.16 12.25 12.75 12.25H11.25C10.84 12.25 10.5 12.59 10.5 13V16.5C10.5 16.91 10.16 17.25 9.75 17.25H8C7.59 17.25 7.25 16.91 7.25 16.5V10.25C7.25 9.64 7.64 9.25 8.25 9.25H16.25C16.86 9.25 17.25 9.64 17.25 10.25V16.5C17.25 16.91 16.91 17.25 16.5 17.25H16Z"
                    fill="#0A66C2"
                  />
                  <path
                    d="M12 8.75C11.04 8.75 10.25 7.96 10.25 7C10.25 6.04 11.04 5.25 12 5.25C12.96 5.25 13.75 6.04 13.75 7C13.75 7.96 12.96 8.75 12 8.75Z"
                    fill="#0A66C2"
                  />
                </svg>
              </div>
              <div className="text-gray-600">Founder and Chief Executive Officer</div>
            </div>
          </div>
          <div className="col-span-4 flex items-center gap-3">
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <Phone className="h-4 w-4 text-gray-600" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <Mail className="h-4 w-4 text-gray-600" />
              </Button>
            </div>
          </div>
          <div className="col-span-4 flex items-center gap-3">
            <div className="h-8 w-8 bg-blue-600 rounded-md flex items-center justify-center text-white font-bold">
              P
            </div>
            <div>
              <div className="font-medium">Polymarket</div>
              <div className="text-gray-600 text-sm">Technology, Information & Media, Software Developer</div>
            </div>
          </div>
        </div>

        {/* Contact 3 */}
        <div className="grid grid-cols-12 gap-4 px-4 py-4 hover:bg-gray-50">
          <div className="col-span-4 flex items-center gap-3">
            <Checkbox id="contact-3" />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Adriaan Kolff</span>
                <svg
                  className="h-4 w-4 text-blue-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
                    fill="#0A66C2"
                  />
                  <path
                    d="M16 17.25H14.25C13.84 17.25 13.5 16.91 13.5 16.5V13C13.5 12.59 13.16 12.25 12.75 12.25H11.25C10.84 12.25 10.5 12.59 10.5 13V16.5C10.5 16.91 10.16 17.25 9.75 17.25H8C7.59 17.25 7.25 16.91 7.25 16.5V10.25C7.25 9.64 7.64 9.25 8.25 9.25H16.25C16.86 9.25 17.25 9.64 17.25 10.25V16.5C17.25 16.91 16.91 17.25 16.5 17.25H16Z"
                    fill="#0A66C2"
                  />
                  <path
                    d="M12 8.75C11.04 8.75 10.25 7.96 10.25 7C10.25 6.04 11.04 5.25 12 5.25C12.96 5.25 13.75 6.04 13.75 7C13.75 7.96 12.96 8.75 12 8.75Z"
                    fill="#0A66C2"
                  />
                </svg>
              </div>
              <div className="text-gray-600">Co - Founder and Chief Executive...</div>
            </div>
          </div>
          <div className="col-span-4 flex items-center gap-3">
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <Phone className="h-4 w-4 text-gray-600" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <Mail className="h-4 w-4 text-gray-600" />
              </Button>
            </div>
          </div>
          <div className="col-span-4 flex items-center gap-3">
            <div className="h-8 w-8 bg-purple-600 rounded-md flex items-center justify-center text-white font-bold">
              M
            </div>
            <div>
              <div className="font-medium">Matchr</div>
              <div className="text-gray-600 text-sm">Administrative & Support Services, Staffing & Recruit...</div>
            </div>
          </div>
        </div>

        {/* Contact 4 */}
        <div className="grid grid-cols-12 gap-4 px-4 py-4 hover:bg-gray-50">
          <div className="col-span-4 flex items-center gap-3">
            <Checkbox id="contact-4" />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Raghavendra Gandadi</span>
                <svg
                  className="h-4 w-4 text-blue-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
                    fill="#0A66C2"
                  />
                  <path
                    d="M16 17.25H14.25C13.84 17.25 13.5 16.91 13.5 16.5V13C13.5 12.59 13.16 12.25 12.75 12.25H11.25C10.84 12.25 10.5 12.59 10.5 13V16.5C10.5 16.91 10.16 17.25 9.75 17.25H8C7.59 17.25 7.25 16.91 7.25 16.5V10.25C7.25 9.64 7.64 9.25 8.25 9.25H16.25C16.86 9.25 17.25 9.64 17.25 10.25V16.5C17.25 16.91 16.91 17.25 16.5 17.25H16Z"
                    fill="#0A66C2"
                  />
                  <path
                    d="M12 8.75C11.04 8.75 10.25 7.96 10.25 7C10.25 6.04 11.04 5.25 12 5.25C12.96 5.25 13.75 6.04 13.75 7C13.75 7.96 12.96 8.75 12 8.75Z"
                    fill="#0A66C2"
                  />
                </svg>
              </div>
              <div className="text-gray-600">Head of Engineering</div>
            </div>
          </div>
          <div className="col-span-4 flex items-center gap-3">
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <Phone className="h-4 w-4 text-gray-600" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <Mail className="h-4 w-4 text-gray-600" />
              </Button>
            </div>
          </div>
          <div className="col-span-4 flex items-center gap-3">
            <div className="h-8 w-8 bg-blue-500 rounded-md flex items-center justify-center text-white font-bold">
              S
            </div>
            <div>
              <div className="font-medium">Smartlead</div>
              <div className="text-gray-600 text-sm">Business Services, Advertising & Marketing Services</div>
            </div>
          </div>
        </div>

        {/* Contact 5 */}
        <div className="grid grid-cols-12 gap-4 px-4 py-4 hover:bg-gray-50">
          <div className="col-span-4 flex items-center gap-3">
            <Checkbox id="contact-5" />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Chanchal Singh</span>
                <svg
                  className="h-4 w-4 text-blue-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
                    fill="#0A66C2"
                  />
                  <path
                    d="M16 17.25H14.25C13.84 17.25 13.5 16.91 13.5 16.5V13C13.5 12.59 13.16 12.25 12.75 12.25H11.25C10.84 12.25 10.5 12.59 10.5 13V16.5C10.5 16.91 10.16 17.25 9.75 17.25H8C7.59 17.25 7.25 16.91 7.25 16.5V10.25C7.25 9.64 7.64 9.25 8.25 9.25H16.25C16.86 9.25 17.25 9.64 17.25 10.25V16.5C17.25 16.91 16.91 17.25 16.5 17.25H16Z"
                    fill="#0A66C2"
                  />
                  <path
                    d="M12 8.75C11.04 8.75 10.25 7.96 10.25 7C10.25 6.04 11.04 5.25 12 5.25C12.96 5.25 13.75 6.04 13.75 7C13.75 7.96 12.96 8.75 12 8.75Z"
                    fill="#0A66C2"
                  />
                </svg>
              </div>
              <div className="text-gray-600">Founder and Director</div>
            </div>
          </div>
          <div className="col-span-4 flex items-center gap-3">
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <Phone className="h-4 w-4 text-gray-600" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <Copy className="h-4 w-4 text-gray-600" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <Mail className="h-4 w-4 text-gray-600" />
              </Button>
            </div>
          </div>
          <div className="col-span-4 flex items-center gap-3">
            <div className="h-8 w-8 bg-teal-500 rounded-md flex items-center justify-center text-white font-bold">
              D
            </div>
            <div>
              <div className="font-medium">DataQua9t</div>
              <div className="text-gray-600 text-sm">Technology, Information & Media, Software Developer</div>
            </div>
          </div>
        </div>

        {/* Contact 6 */}
        <div className="grid grid-cols-12 gap-4 px-4 py-4 hover:bg-gray-50">
          <div className="col-span-4 flex items-center gap-3">
            <Checkbox id="contact-6" />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Brijen Brahmbhatt</span>
                <svg
                  className="h-4 w-4 text-blue-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
                    fill="#0A66C2"
                  />
                  <path
                    d="M16 17.25H14.25C13.84 17.25 13.5 16.91 13.5 16.5V13C13.5 12.59 13.16 12.25 12.75 12.25H11.25C10.84 12.25 10.5 12.59 10.5 13V16.5C10.5 16.91 10.16 17.25 9.75 17.25H8C7.59 17.25 7.25 16.91 7.25 16.5V10.25C7.25 9.64 7.64 9.25 8.25 9.25H16.25C16.86 9.25 17.25 9.64 17.25 10.25V16.5C17.25 16.91 16.91 17.25 16.5 17.25H16Z"
                    fill="#0A66C2"
                  />
                  <path
                    d="M12 8.75C11.04 8.75 10.25 7.96 10.25 7C10.25 6.04 11.04 5.25 12 5.25C12.96 5.25 13.75 6.04 13.75 7C13.75 7.96 12.96 8.75 12 8.75Z"
                    fill="#0A66C2"
                  />
                </svg>
              </div>
              <div className="text-gray-600">Head - Talent and People Operatio...</div>
            </div>
          </div>
          <div className="col-span-4 flex items-center gap-3">
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <Phone className="h-4 w-4 text-gray-600" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <Mail className="h-4 w-4 text-gray-600" />
              </Button>
            </div>
          </div>
          <div className="col-span-4 flex items-center gap-3">
            <div className="h-8 w-8 bg-blue-700 rounded-md flex items-center justify-center text-white font-bold">
              N
            </div>
            <div>
              <div className="font-medium">Notchup</div>
              <div className="text-gray-600 text-sm">Technology, Information & Media, Software Developer</div>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between p-4 border-t">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Go to page</span>
          <Input className="w-16 h-8" defaultValue="8" />
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button variant="ghost" size="sm" className="h-8 min-w-8 px-3">
            1
          </Button>

          <span className="text-gray-500">...</span>

          <Button variant="ghost" size="sm" className="h-8 min-w-8 px-3">
            7
          </Button>

          <Button variant="default" size="sm" className="h-8 min-w-8 px-3 bg-gray-900">
            8
          </Button>

          <Button variant="ghost" size="sm" className="h-8 min-w-8 px-3">
            9
          </Button>

          <span className="text-gray-500">...</span>

          <Button variant="ghost" size="sm" className="h-8 min-w-8 px-3">
            400
          </Button>

          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="text-sm text-gray-600">175 - 200 of 745K</div>
      </div>
    </div>
  )
}
