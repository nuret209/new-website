import Menu from '../components/Menu'
import Apps from '../components/Apps'
import Folder from '../components/Folder'
import FileFolderIcon from '../components/FileFolderIcon'

const Trash = () => {
    return (
        <div className='relative h-full'>
            <Menu />
            <Apps />
            <Folder windowTitle='Trash'>
                <FileFolderIcon title='python' iconPath='/document.svg' path='https://www.youtube.com/shorts/Whs3Bwl9qTI?feature=share' />
                {null}
            </Folder>
        </div>
    )
}

export default Trash