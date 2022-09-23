import { pushNotificationsServiceOrigin } from 'src/consts/api';
import { saveSubscriptionMock } from 'src/api/mock/subscription';

export async function saveSubscription(subscription) {
  return process.env.NODE_ENV === 'development'
    ? saveSubscriptionMock()
    : fetch(`${pushNotificationsServiceOrigin}/subscription`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(subscription),
    }).then((response) => response.json());
}
