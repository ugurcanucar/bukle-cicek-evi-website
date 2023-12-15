
import HeroInformation from "@/components/home/components/HeroInformation";
import Container from "@/components/shared/Container";
import StickyNavbar from "@/components/shared/StickyNavbar";
import DownArrowIcon from "@icons/down-arrow.svg";
import SearchOutlineIcon from "@icons/search-outline.svg";
import Image from "next/image";
import styles from "./homepage.module.scss";
import BestSellers from "@/components/home/sections/best-sellers";


export default function Home() {
  return (
    <div className={styles.general_wrapper}>
      <StickyNavbar/>
      <section className={styles.hero_section}>
        <Container className={"h-full"}>
          <nav className={styles.navbar}>
            <div className={styles.logo}>
              {/* <Image src={BrandLogo} width={100} height={100} alt="logo" /> */}
              BUKLE ÇİÇEK EVİ
            </div>
            <div className={styles.nav_menu}>
              <ul className={styles.nav_menu_list_wrapper}>
                <li>Anasayfa</li>
                <li>Sana Uygun</li>
                <li>İletişim</li>
              </ul>
              <Image
                src={SearchOutlineIcon}
                width={35}
                height={35}
                className={styles.search_logo}
                alt="search-icon"
              />
            </div>
          </nav>
         <HeroInformation/>
          <Image
            className="absolute bottom-3 left-1/2 animate-bounce"
            src={DownArrowIcon}
            alt="down-arrow"
            width={45}
            height={45}
          />
        </Container>
      </section>
      <BestSellers/>
    </div>
  );
}
