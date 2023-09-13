import Link from 'next/link'

export default function Home() {
  return (
    <div className="mx-8">
      <ul>
        <li className='underline my-4'><Link href="/singleton-pattern">Singleton-Pattern</Link></li>
        <li className='underline my-4'><Link href="/proxy-pattern">Proxy-Pattern</Link></li>
        <li className='underline my-4'><Link href="/module-pattern">Module-Pattern</Link></li>
        <li className='underline my-4'><Link href="/provider-pattern">Provider-Pattern</Link></li>
        <li className='underline my-4'><Link href="/mixin-pattern">Mixin Pattern</Link></li>
        <li className='underline my-4'><Link href="/mediator-pattern">Mediator-Pattern</Link></li>
        <li className='underline my-4'><Link href="/flyweight-pattern">Flyweight-Pattern</Link></li>
      </ul>
    </div>
  )
}
