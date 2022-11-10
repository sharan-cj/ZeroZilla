# url = `http://159.89.163.122:3003/`


1.  `POST   {{url}}/agency`

```
{
    "agency": {
      "agencyId": "310",
      "name": "Charlie",
      "address1": "1st cross 2nd main",
      "state": "Karnataka",
      "city": "Bangalore",
      "phoneNumber": "9620739951"
    },
      
    "client": {
      "name": "Sharan",
      "agencyId": "425",
      "clientId": "12sssd",
      "email": "sharan@gmail.com",
      "phoneNumber": "9620739000",
      "totalBill": 32
    }
} 
```

2.  `PATCH   {{url}}/client/:clientId`

request body
```
  {
    "name": "Jhon",
    "phoneNumber": "9620739000",
    "totalBill": 300
  }
```
3. `GET   {{url}}/agency/top-clients?top=5`

Response
```
  {
    "AgencyName": "Beta",
    "ClientName": "Sharan",
    "TotalBill": 625
  }
  ```
