import Link from "next/link";
export default function Navbar() {
  const colorActive=()=>{
    
  }

  return (
    <div>
      <ul>
        <li onClick={colorActive}>
          <Link href={"/"}>Admin</Link>
        </li>
        <li><Link href={""}>Car</Link></li>
        <li><Link href={""}>Image</Link></li>
        <li><Link href={""}>Appointement</Link></li>
      </ul>
    </div>
  )
}
