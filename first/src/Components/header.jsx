import Button from './menu_button.jsx';
import Logo from './logo.jsx';

const header = ({ onAdd }) => {


  return (
    <header className='bg-white py-5 flex justify-center align-middle h-[12vh]'>
    <div className='flex w-[80%]  justify-between align-middle max-w-[100%]'>
      <Logo/>
      <div className='flex justify-between items-center '>
      <Button full={false} text={'Home'} color= {'text-gray-400'} onClick={onAdd} size={'p'} />
      <Button full={false} text={'About Us'} color= {'text-gray-400'} onClick={onAdd} size={'p'}/>
      <Button full={false} text={'Contact'} color= {'text-gray-400'} onClick={onAdd} size={'p'}/>
      <Button full={false} text={'Login'} color= {'text-gray-400'} onClick={onAdd} size={'p'}/>
      <Button full={true} text={'Signup'} color= {'text-white'} onClick={onAdd} size={'p'}/></div>
      </div>
    </header>
  );
};

export default header;
