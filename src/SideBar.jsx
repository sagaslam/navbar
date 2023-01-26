import { FaFire, FaPoo } from 'react-icons/fa'
import { BsPlus, BsFillCloudLightningFill, BsGearFill } from 'react-icons/bs'

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow">
      <SideBarIcon icon={<FaFire size="28" />} text={'fire'} />
      <Divider />
      <SideBarIcon icon={<BsPlus size="32" />} />
      <SideBarIcon icon={<BsFillCloudLightningFill size="20" />} />
      <SideBarIcon icon={<FaPoo size="20" />} />
      <Divider />
      <SideBarIcon icon={<BsGearFill size="22" />} />
    </div>
  )
}

const SideBarIcon = ({ icon, text = 'tooltip' }) => {
  return (
    <div className="sidebar-icon group">
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
    </div>
  )
}

const Divider = () => <hr className="sidebar-hr" />

export default SideBar
