
import Menu from '../components/Menu'
import Apps from '../components/Apps'
import Folder from '../components/Folder'
import FileFolderIcon from '../components/FileFolderIcon'
import NotePadWindow from '../components/NotePadWindow'
const NotePad = () => {
    return (

        <div className='relative h-full' >
            <Menu />
            <Apps />
            <Folder windowTitle='System Apps'>
                <FileFolderIcon title='Calculator' iconPath='/appIcon.svg' path='/' />
                <FileFolderIcon title='NotePad' iconPath='/appIcon.svg' path='/' />
                <FileFolderIcon title='About This OS' iconPath='/sysIcon.svg' path='/' />
            </Folder>
            <NotePadWindow />
        </div>

    )
}

export default NotePad