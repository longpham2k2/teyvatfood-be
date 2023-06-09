# TeyvatFood :meat_on_bone:

### by [longpham2k2](https://github.com/longpham2k2)

---

## APIs

- getAll Food

  1. URL: GET localhost:8080/api/food/
  2. Parameters: None
  3. Expected results:

  - Success

    > [
    >
    > > {
    > > "id": 1,
    > > "name": "A food",
    > > "rarity": 0,
    > > "type": 1,
    > > "effect": "yada yada",
    > > "description": "etc. etc.",
    > > "iconPath": "/path/to/file" || null,
    > > "createdAt": "xxx",
    > > "updatedAt": "yyy"
    > > },
    > > {
    > > "id": 2,
    > > "name": "B food",
    > > "rarity": 0,
    > > "type": 1,
    > > "effect": "abcdef",
    > > "description": "bla bla",
    > > "iconPath": "/path/to/file" || null,
    > > "createdAt": "xxx" || null,
    > > "updatedAt": "yyy" || null
    > > }
    > > ]

  - Failure
    > 404 Not Found

- create Food

  1.  URL: POST localhost:8080/api/food/
  2.  Parameters: x-www-form-encoded

      - name: string | required
      - rarity: int | required
      - type: int (foreign key) | required
      - effect: string | required
      - description: string | required

  3.  Expected results:

  - Success

    > {
    > "status": "success"
    > }

  - Failure

    > {
    > "status": "failure"
    > "message": "error-here"
    > }

- get Food

  1.  URL: GET localhost:8080/api/food/{id: int | required}
  2.  Parameters: None

  3.  Expected results:

  - Success

    > {
    > "id": 1,
    > "name": "A food",
    > "rarity": 0,
    > "type": 1,
    > "effect": "yada yada",
    > "description": "etc. etc.",
    > "iconPath": "/path/to/file" || null,
    > "createdAt": "xxx",
    > "updatedAt": "yyy"
    > }

  - Failure

    > 404 Not Found

- update Food

  1.  URL: PUT localhost:8080/api/food/{id: int | required}
  2.  Parameters: x-www-form-encoded

      - name: string | required
      - rarity: int | required
      - type: int (foreign key) | required
      - effect: string | required
      - description: string | required

  3.  Expected results:

  - Success

    > {
    > "status": "success"
    > }

  - Failure

    > {
    > "status": "failure"
    > "message": "error-here"
    > }

- patch Food

  1.  URL: PATCH localhost:8080/api/food/{id: int | required}
  2.  Parameters: x-www-form-encoded

      - name: string | optional
      - rarity: int | optional
      - type: int (foreign key) | optional
      - effect: string | optional
      - description: string | optional

  3.  Expected results:

  - Success

    > {
    > "status": "success"
    > }

  - Failure

    > {
    > "status": "failure"
    > "message": "error-here"
    > }

- delete Food

  1.  URL: DELETE localhost:8080/api/food/{id: int | required}
  2.  Parameters: none

  3.  Expected results:

  - Success

    > {
    > "status": "success"
    > }

  - Failure

    > {
    > "status": "failure"
    > "message": "error-here"
    > }

- getAll FoodTypes

  1. URL: GET localhost:8080/api/food/types
  2. Parameters: None
  3. Expected results:

  - Success

    > [
    >
    > > {
    > > "id": 1,
    > > "name": "A type",
    > > "createdAt": "xxx",
    > > "updatedAt": "yyy"
    > > },
    > > {
    > > "id": 2,
    > > "name": "B type",
    > > "createdAt": "xxx" || null,
    > > "updatedAt": "yyy" || null
    > > }
    > > ]

  - Failure
    > 404 Not Found
