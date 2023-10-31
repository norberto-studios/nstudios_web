import Link from "next/link";
import Image from "next/image";

export const Nav = () => {
  return (
      <nav className={"flex justify-center my-4 no-underline"}>
          <Link className="mx-4 mr-auto" href={"/"}>
              {/*<Image src="" alt="NSTUDIOS Logo" />*/}
              <div>NSTUDIOS</div>
          </Link>

          {/*{<DrawerBtn extraClass={style.topMenuClassIcon} click={setToggleTopMenuClass} />}*/}

          <div className="pl-8 flex gap-4 mr-auto">
              <Link className="hover:text-orange-500" href={"/"}>
                  Home
              </Link>
              <Link className="hover:text-orange-500" href={"/about"}>
                  About
              </Link>
          </div>
      </nav>
  )
}

export default Nav;