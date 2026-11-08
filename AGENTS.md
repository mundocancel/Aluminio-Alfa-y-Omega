AGENTS.md

Este archivo define las directrices que todo agente de IA debe seguir al trabajar en mis proyectos. El objetivo es garantizar que cada intervención deje el código mejor de lo que lo encontró, priorizando seguridad, estructura, escalabilidad y diseño UI.

---

🎯 Principios generales

1. Nunca rompas lo que funciona. Antes de proponer cambios, entiende el contexto del proyecto.
2. Propón mejoras, no solo parches. Si detectas un problema, sugiere la solución ideal y una alternativa incremental.
3. Documenta cada decisión. Cada cambio debe explicar el por qué, no solo el qué.
4. Aplica mejoras de forma incremental. Prioriza cambios pequeños, revisables y testeables.
5. Señala deuda técnica incluso si no la resuelves en esa iteración.

---

🔐 Seguridad

Al tocar cualquier proyecto, revisa y mejora:

· Gestión de secretos: ninguna credencial, API key o token debe estar hardcodeada. Usa variables de entorno (.env) y verifica que estén en .gitignore.
· Validación de entradas: toda entrada de usuario (formularios, queries, headers) debe validarse y sanitizarse en el backend.
· Autenticación y autorización: verifica que los endpoints sensibles requieran autenticación y permisos adecuados. Revisa exposición de datos en respuestas.
· Dependencias: detecta dependencias desactualizadas o vulnerables (npm audit, pip-audit, dependabot, etc.).
· SQL / NoSQL injection: uso de ORMs o consultas parametrizadas. Nunca concatenar strings en queries.
· XSS / CSRF: sanitización en el renderizado, headers de seguridad, tokens CSRF en formularios.
· CORS y headers HTTP: configuración restrictiva, helmet, CSP, HSTS.
· Rate limiting en endpoints públicos y de autenticación.
· Logs: no loggear datos sensibles (contraseñas, tokens, PII).
· Manejo de errores: nunca exponer stack traces ni detalles internos al cliente.

Si detectas una vulnerabilidad crítica, repórtala primero y espera confirmación antes de modificar lógica sensible.

---

🏗️ Estructura

Al revisar el código, evalúa y propón mejoras en:

· Organización de carpetas: separación clara por capas (dominio, aplicación, infraestructura) o por feature. Evita carpetas "basura" (utils, helpers, misc) sin criterio.
· Cohesión y acoplamiento: módulos con una única responsabilidad. Detecta y divide archivos monolíticos (>300 líneas suele ser señal).
· Nombres: consistentes, descriptivos, sin abreviaturas crípticas. Sigue las convenciones del lenguaje.
· Duplicación: identifica código repetido y sugiere extracción (DRY sin caer en abstracciones prematuras).
· Tipado: TypeScript estricto, tipos de Python (mypy), contratos claros entre módulos. Evita any / Any innecesarios.
· Manejo de errores consistente: un patrón único en todo el proyecto (excepciones custom, Result types, etc.).
· Tests: cobertura mínima en lógica de negocio, tests legibles y aislados. Propón tests para cualquier cambio funcional.
· Configuración: centralizada, tipada, sin valores mágicos dispersos.
· Linting y formato: configuración consistente (eslint, prettier, ruff, black, golangci-lint, etc.).

---

📈 Escalabilidad

Antes de dar por buena cualquier implementación, verifica:

· Separación de responsabilidades: lógica de negocio independiente de frameworks, base de datos y UI.
· Statelessness: los servicios deben poder escalar horizontalmente. Evita estado en memoria compartida entre requests.
· Consultas a BD: índices en columnas filtradas/ordenadas, paginación obligatoria en listados, evitar N+1, uso de EXPLAIN cuando aplique.
· Caché: identifica puntos donde aplicar caché (Redis, memoria, HTTP cache) sin invalidaciones frágiles.
· Asincronía y colas: operaciones pesadas (emails, procesamiento de imágenes, reportes) fuera del request-response cuando sea posible.
· Idempotencia: operaciones críticas (pagos, webhooks, reintentos) deben ser idempotentes.
· Observabilidad: logs estructurados, métricas básicas, health checks, tracing cuando aplique.
· Configuración por entorno: nada hardcodeado que dependa del entorno (URLs, puertos, flags).
· Versionado de API: si expones endpoints, usa versionado desde el inicio.
· Migraciones: siempre reversibles, probadas, sin downtime cuando sea posible.

---

🎨 Diseño UI

Cuando toques el frontend, aplica estas mejoras:

· Consistencia visual: respeta el sistema de diseño existente (tokens, colores, tipografía, espaciados). Si no existe, propón uno mínimo.
· Accesibilidad (a11y):
  · Contraste de color suficiente (WCAG AA mínimo).
  · Navegación por teclado y focus visible.
  · alt en imágenes, aria-* donde corresponda, labels en formularios.
  · HTML semántico (button para botones, a para navegación).
· Responsive: mobile-first, sin roturas entre breakpoints comunes (320, 768, 1024, 1440).
· Feedback al usuario: estados de carga, vacío, error y éxito en toda interacción asíncrona.
· Formularios: validación inline, mensajes claros, no bloquear el envío sin explicar el error.
· Performance percibida: lazy loading de imágenes/rutas, skeletons en lugar de spinners bloqueantes, evitar layout shifts.
· Microinteracciones: transiciones sutiles, pero nunca a costa de la funcionalidad. Respeta prefers-reduced-motion.
· Textos: claros, sin jerga técnica frente al usuario final. Placeholders no sustituyen labels.
· Consistencia de componentes: reutiliza antes de crear. Si un componente se repite 3 veces, extráelo.

---

✅ Checklist antes de cerrar una tarea

☐ ¿Introduje secretos o credenciales? No.
☐ ¿Validé entradas del usuario en el backend? Sí.
☐ ¿Agregué o actualicé tests para el cambio? Sí / justificado.
☐ ¿El código respeta la estructura y convenciones del proyecto? Sí.
☐ ¿Hay nuevas consultas sin índice o sin paginación? Revisado.
☐ ¿Los cambios de UI cumplen accesibilidad básica? Sí.
☐ ¿Documenté decisiones no obvias en el PR o commit? Sí.
☐ ¿Señalé deuda técnica pendiente aunque no la haya resuelto? Sí.

---

🚫 Qué NO hacer

· No refactorizar sin tests que respalden el cambio.
· No introducir dependencias nuevas sin justificación clara.
· No cambiar contratos públicos (APIs, esquemas) sin versionado o aviso.
· No mezclar cambios funcionales con refactors grandes en el mismo commit/PR.
· No "arreglar" algo que no entiendes solo porque parece raro.
· No exponer datos internos en mensajes de error al cliente.

---

📝 Formato de reporte de mejoras

Cuando detectes oportunidades que no correspondan a la tarea actual, regístralas así:

```
[TIPO] Descripción breve
- Ubicación: archivo:línea
- Impacto: bajo | medio | alto
- Esfuerzo: bajo | medio | alto
- Sugerencia: ...
```

Tipos: [SEGURIDAD], [ESTRUCTURA], [ESCALABILIDAD], [UI], [DEUDA TÉCNICA].

---

Última actualización: mantener este archivo vivo. Cada lección aprendida debe reflejarse aquí.