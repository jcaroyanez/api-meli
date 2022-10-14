export const mapperItems = (items) => {
    return items.map(item => {
      const [amount, decimals] = item.price.toString().split('.')
  
      return {
        id: item.id,
        title: item.title,
        price: {
          currency: item.currency_id,
          amount: new Intl.NumberFormat().format(amount),
          decimals: decimals || parseInt('00'),
        },
        picture: item.thumbnail,
        condition: item.condition,
        shipping: item.shipping && item.shipping.free_shipping,
        state_name: item.address.state_name
      }
    }) 
}