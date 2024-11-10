
import Menu from '../components/Menu'
import Apps from '../components/Apps'
import Folder from '../components/Folder'
import FileFolderIcon from '../components/FileFolderIcon'
const SystemApps = () => {
    return (
        <div className='relative h-full' >
            <Menu />
            <Apps />
            <Folder windowTitle='System Apps'>
                <FileFolderIcon title='Calculator' iconPath='/appIcon.svg' path='/calculator'/>
                <FileFolderIcon title='NotePad' iconPath='/appIcon.svg' path='/notepad'/>
                <FileFolderIcon title='About This OS' iconPath='/sysIcon.svg' path='/about'/>             
            </Folder>
          
        </div>
    )
}

export default SystemApps