import { Button, Modal } from '@mantine/core'
import TopBar from './Components/TopBar'
import { HiOutlineShoppingCart } from 'react-icons/hi2'
import { LuRefreshCcw } from 'react-icons/lu'
import PosTableComponent from './Components/PosTableComponent'
import { useDisclosure } from '@mantine/hooks'
import { useAppSelector } from './hooks/hooks'
import { useNavigate } from 'react-router-dom'


const Pos = () => {
const [opened, { open, close }] = useDisclosure(false);

const orderList = useAppSelector((state) => state.orderList.orderList);


const nav = useNavigate()






  return (
    <div className=" w-full min-h-screen overflow-auto ">
    <TopBar/>

    <Modal size="auto" opened={opened} onClose={close} title="Orders" centered>
       <div className="w-full">
        {
          orderList.map((order) => (
            <div key={order.orderId} className="py-2 cursor-pointer flex items-center justify-stretch gap-4 w-full">
              <h1> OrderId: {order.orderId}</h1>
              <h1> Customer Name: {order.customerInfo}</h1>
              <h1>Product :  {order.orders?.length}</h1>

              <Button onClick={() => nav(`/pos/${order.area}/${order.orderId}`)}>Pay</Button>
            </div>
          ))
        }
       </div>
      </Modal>

    <div className="flex flex-row gap-4 mt-4 px-4">
        <Button
        onClick={open}
          className="!bg-btnDark"
          leftSection={<HiOutlineShoppingCart size={24} />}
        >
          View Order
        </Button>
        <Button className="!bg-btn" leftSection={<LuRefreshCcw size={24} />}>
          Transcation
        </Button>
      </div>


    <PosTableComponent/>


</div>
  )
}

export default Pos