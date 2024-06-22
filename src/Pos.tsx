import React from 'react';
import { Button, Modal } from '@mantine/core';
import TopBar from './Components/TopBar';
import { HiOutlineShoppingCart } from 'react-icons/hi2';
import { LuRefreshCcw } from 'react-icons/lu';
import PosTableComponent from './Components/PosTableComponent';
import { useDisclosure } from '@mantine/hooks';
import { useAppSelector, useAppDispatch } from './hooks/hooks';
import { useNavigate } from 'react-router-dom';
import { deleteOrder } from './slice/OrderListSlice';

const Pos = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const orderList = useAppSelector((state) => state.orderList.orderList);
  const dispatch = useAppDispatch();
  const nav = useNavigate();

  const handleDeleteOrder = (orderId: number) => {
    dispatch(deleteOrder(orderId));
  };

  return (
    <div className="w-full min-h-screen overflow-auto">
      <TopBar />

      <Modal size="auto" opened={opened} onClose={close} title="Orders" centered>
        <div className=" w-full">
          {orderList.length === 0 ? (
            <div className="text-center w-96 py-4">
              <h1>No Orders Found!</h1>
            </div>
          ) : (
            orderList.map((order) => (
              <div key={order.orderId} className="py-2 cursor-pointer flex items-center justify-between gap-4 w-full">
                <div>
                  <h1>OrderId: {order.orderId}</h1>
                  <h1>Customer Name: {order.customerInfo}</h1>
                  <h1>Product: {order.orders?.length}</h1>
                </div>

                <div className="flex gap-2">
                  <Button className="text-sm" onClick={() => nav(`/pos/${order.area}/${order.orderId}`)}>Pay</Button>
                  <Button className="text-sm !bg-red-500" onClick={() => handleDeleteOrder(order.orderId)}>Cancel</Button>
                </div>
              </div>
            ))
          )}
        </div>
      </Modal>

      <div className="flex flex-row gap-4 mt-4 px-4">
        <Button onClick={open} className="!bg-btnDark" leftSection={<HiOutlineShoppingCart size={24} />}>
          View Order
        </Button>
        <Button className="!bg-btn" leftSection={<LuRefreshCcw size={24} />}>
          Transaction
        </Button>
      </div>

      <PosTableComponent />
    </div>
  );
};

export default Pos;
