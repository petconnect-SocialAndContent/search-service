# Search Service – PetConnect

Este microservicio permite realizar búsquedas a través de Elasticsearch.

## Endpoints

| Ruta               | Método | Descripción                     |
|--------------------|--------|---------------------------------|
| /api/v1/search     | GET    | Buscar contenido (query param) |
| /api/v1/search/index | POST | Indexar contenido de prueba     |

### Ejemplo JSON para indexar

```json
{
  "type": "pet",
  "name": "Luna",
  "description": "Labrador amigable en Quito",
  "tags": ["labrador", "mascota", "quito"]
}
