import SingletonPattern from './singleton-pattern/index';
import ProxyPattern from './proxy-pattern/index'
import ProviderPattern from './provider-pattern/index'

export default function Home() {
  return (
    <div className="mx-8">
      {/* <SingletonPattern/> */}
      {/*<ProxyPattern/> */}
      <ProviderPattern/>
    </div>
  )
}
