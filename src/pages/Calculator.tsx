import Menu from '../components/Menu'
import Apps from '../components/Apps'
import Folder from '../components/Folder'
import FileFolderIcon from '../components/FileFolderIcon'
import CalculatorWindow from '../components/CalculatorWindow'

const Calculator = () => {
    return (

        <div className='relative h-full' >
            <Menu />
            <Apps />
            <Folder windowTitle='System Apps'>
                <FileFolderIcon title='Calculator' iconPath='/appIcon.svg' path='/' />
                <FileFolderIcon title='NotePad' iconPath='/appIcon.svg' path='/' />
                <FileFolderIcon title='About This OS' iconPath='/sysIcon.svg' path='/' />
            </Folder>
            <CalculatorWindow />
        </div>

    )
}

export default Calculator