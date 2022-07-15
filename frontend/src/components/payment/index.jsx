import React from 'react';
import { Button } from 'rsuite';
import CardList from '../cardList';
import './style.css'

function pdfCheckout() {
    let getList = document.getElementById('fruitList').innerHTML;

    const pdfWindow = window.open('', '', 'width-100,heigth-100')
    pdfWindow.document.write('<html><head>')
    pdfWindow.document.write('<title>Payment Document</title><head>')
    pdfWindow.document.write('<body>')
    pdfWindow.document.write('<h3>Payment Checkout</h3>')
    pdfWindow.document.write(getList)
    pdfWindow.document.write('</body></html>')
    pdfWindow.document.close();
    pdfWindow.print();
}

const Payment = () => {
    return (
        <div className='paymentList'>
            <h2>Pagamento</h2>
            <hr />
            <div className='cartItems'>
                <CardList />
            </div>
            <div className='getPrice'>
                <Button onClick={pdfCheckout} appearance="primary">
                    Comprar
                </Button>
            </div>
        </div>
    )
}

export default Payment