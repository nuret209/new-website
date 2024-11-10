import Apps from '../components/Apps'
import Menu from '../components/Menu'
import Folder from '../components/Folder'
import FileFolderIcon from '../components/FileFolderIcon'
import AboutThisOSWindow from '../components/AboutThisOSWindow'

const AboutThisOS = () => {
    return (
        <div className='relative h-full' >
            <Menu />
            <Apps />
            <Folder windowTitle='System Apps'>
                <FileFolderIcon title='Calculator' iconPath='/appIcon.svg' path='/' />
                <FileFolderIcon title='NotePad' iconPath='/appIcon.svg' path='/' />
                <FileFolderIcon title='About This OS' iconPath='/sysIcon.svg' path='/' />
            </Folder>
            <AboutThisOSWindow />

        </div>
    )
}

export default AboutThisOS