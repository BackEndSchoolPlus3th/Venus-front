import Link from 'next/link'
import { Button } from './ui/button'

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <Link href={'/'}>
        <div>Home</div>
      </Link>
      <ul>
        <li>
          <Button>로그인</Button>
        </li>
      </ul>
    </header>
  )
}

export default Header
