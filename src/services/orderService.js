
export const fetchOrderHistory = async () => {
  const response = await fetch('/api/orders');
  if (!response.ok) {
      throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data;
};