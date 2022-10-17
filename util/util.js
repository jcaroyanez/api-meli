const formatAmount = (amount) => {
  return new Intl.NumberFormat().format(amount);
}

const mapCategories = (filters) => {
  return filters.map(filter => {
    if(filter.values.length) {
      return filter.values[0].name
    }
  })
}

export const mapperItems = (data) => {
  const items = data.results.map(item => {
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

  return {
    items,
    categories: mapCategories(data.filters)
  }
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