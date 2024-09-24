"use-client";
import Image from "next/image";
import Link from "next/link";
import { RiMenu3Fill } from "react-icons/ri";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

const Navbar = () => {
  return (
    <header className="px-3 md:px-10 py-3 border-2 sticky top-0 z-30 backdrop-blur-lg">
      <nav className="flex justify-between items-center">
        <h1 className="relative">
          <Link href={"/"}>
            <Image
              src={"https://jaswantsoni41.github.io/ecultify-advertising-web-app-assignment/icons/Figma.svg"}
              width={25}
              height={25}
              alt="Logo"
              priority={true}
            />
          </Link>
        </h1>

        <div className="nav-toggles">
          <div className="hamburger-menu lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <RiMenu3Fill />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle >
                      <Link href={"/"} className="flex">
                        <Image
                          src={"https://jaswantsoni41.github.io/ecultify-advertising-web-app-assignment/icons/Figma.svg"}
                          width={25}
                          height={25}
                          alt="Logo"
                          priority={true}
                        />Figma
                      </Link> 
                  </SheetTitle>
                </SheetHeader>
                <SheetDescription asChild>
                <div className="nav-links w-full my-2 flex flex-col ">
                    <ul className="w-full text-center">
                        <li className="py-2 hover:bg-gray-100"><Link href={'/'}>Products</Link></li>
                        <li className="py-2 hover:bg-gray-100"><Link href={'/'}>Solutions</Link></li>
                        <li className="py-2 hover:bg-gray-100"><Link href={'/'}>Community</Link></li>
                        <li className="py-2 hover:bg-gray-100"><Link href={'/'}>Resources</Link></li>
                        <li className="py-2 hover:bg-gray-100"><Link href={'/'}>Pricing</Link></li>
                        <li className="py-2 hover:bg-gray-100"><Link href={'/'}>Contact</Link></li>
                    </ul>
                    <div className="signin-box flex justify-center items-center gap-3 mt-7">
                        <Button variant="outline">Sign In</Button>
                        <Button>Register</Button>
                    </div>
                </div>
                </SheetDescription>
              </SheetContent>
            </Sheet>
          </div>

          <div className="nav-links w-full hidden lg:flex justify-center items-center gap-2  ">
                    <ul className="text-center flex justify-center items-center gap-1 ">
                        <li className="p-2 rounded-lg hover:bg-gray-200"><Link href={'/'}>Products</Link></li>
                        <li className="p-2 rounded-lg hover:bg-gray-200"><Link href={'/'}>Solutions</Link></li>
                        <li className="p-2 rounded-lg hover:bg-gray-200"><Link href={'/'}>Community</Link></li>
                        <li className="p-2 rounded-lg hover:bg-gray-200"><Link href={'/'}>Resources</Link></li>
                        <li className="p-2 rounded-lg hover:bg-gray-200"><Link href={'/'}>Pricing</Link></li>
                        <li className="p-2 rounded-lg hover:bg-gray-200"><Link href={'/'}>Contact</Link></li>
                    </ul>
                    <div className="signin-box flex justify-center items-center gap-3">
                        <Button variant="outline">Sign In</Button>
                        <Button>Register</Button>
                    </div>
                </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
