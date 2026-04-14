# Vercel API Documentation

## Authentication

For accessing the Vercel API, you must include a Bearer token in the authorization header:

```bash
curl -H "Authorization: Bearer YOUR_TOKEN" https://api.vercel.com/v1/endpoint
```

### Example in JavaScript:

```javascript
fetch('https://api.vercel.com/v1/endpoint', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_TOKEN',
  },
})
.then(response => response.json())
.then(data => console.log(data));
```

## Endpoints

### Deployments Endpoint
**Endpoint:** `/v6/deployments`

**Description:** Retrieve deployment information.

#### Example Request:

```bash
curl -H "Authorization: Bearer YOUR_TOKEN" https://api.vercel.com/v6/deployments
```

### Git Repositories Endpoint
**Endpoint:** `/v1/integrations/search-repo`

**Description:** Search for git repositories.

#### Example Request:

```bash
curl -H "Authorization: Bearer YOUR_TOKEN" https://api.vercel.com/v1/integrations/search-repo
```

## Examples

### Curl Request to Deployments
```bash
curl -H "Authorization: Bearer YOUR_TOKEN" https://api.vercel.com/v6/deployments
```

### Curl Request to Search Repositories
```bash
curl -H "Authorization: Bearer YOUR_TOKEN" https://api.vercel.com/v1/integrations/search-repo
```

### JavaScript Fetch to Deployments
```javascript
fetch('https://api.vercel.com/v6/deployments', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_TOKEN',
  },
})
.then(response => response.json())
.then(data => console.log(data));
```

### JavaScript Fetch to Search Repositories
```javascript
fetch('https://api.vercel.com/v1/integrations/search-repo', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_TOKEN',
  },
})
.then(response => response.json())
.then(data => console.log(data));
```