const { test, expect }= require('@playwright/test')

test.describe('API Testing', () => {
  const baseUrl = 'https://demo.spreecommerce.org'

  test('Retrieve Country', async ({ request }) => {

    const response = await request.get(`${baseUrl}/api/v2/storefront/countries/ind`)
    expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())
    console.log(responseBody)
    //expect(response.status()).toBe(200)
    expect(responseBody.data.attributes.iso_name).toBe('INDIA')
    expect(responseBody.data.attributes.name).toBe('India')
  })
})