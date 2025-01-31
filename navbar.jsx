import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className="flex justify-between items-center p-4 bg-white shadow-md">
      {/* Hamburger Menu */}
      <div className="relative">
        <Button variant="ghost" onClick={() => setIsOpen(!isOpen)}>
          <Menu size={24} />
        </Button>
        {isOpen && (
          <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg">
            <ul className="py-2">
              <li>
                <a href="login.html" className="block px-4 py-2 hover:bg-gray-100">
                  เข้าสู่ระบบ
                </a>
              </li>
              <li>
                <a href="home.html" className="block px-4 py-2 hover:bg-gray-100">
                  หน้าหลัก
                </a>
              </li>
              <li>
                <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                  ออกจากระบบ
                </button>
              </li>
              <li>
                <a href="score.html" className="block px-4 py-2 hover:bg-gray-100">
                  คะแนนสะสม
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
      
      {/* Logo */}
      <img src="LOGO1.png" alt="Logo" className="h-10" />
    </Card>
  );
}
