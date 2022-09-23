export async function saveSubscriptionMock() {
  await new Promise((resolve) => setTimeout(resolve, 300));
  return { data: { id: 478 } };
}
