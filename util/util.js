const formatAmount = (amount) => {
  return new Intl.NumberFormat().format(amount);
}

export const mapperItems = (items) => {
    return items.map(item => {
      const [amount, decimals] = item.price.toString().split('.')
  
      return {
        id: item.id,
        title: item.title,
        price: {
          currency: item.currency_id,
          amount: formatAmount(amount),
          decimals: parseInt(decimals) || 0,
        },
        picture: item.thumbnail,
        condition: item.condition,
        free_shipping: item.shipping && item.shipping.free_shipping,
        state_name: item.address.state_name
      }
    }) 
}

export const mapperItemDetail = (item) => {
  const [amount, decimals] = item.price.toString().split('.')

    return {
      id: item.id,
      title: item.title,
      price: {
        currency: item.currency_id,
        amount: formatAmount(amount),
        decimals: parseInt(decimals) || 0,
      },
      picture: item.pictures[0].secure_url,
      condition: item.condition,
      free_shipping: item.shipping && item.shipping.free_shipping,
      sold_quantity: item.sold_quantity,
    }
}