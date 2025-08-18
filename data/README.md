
Plans Json 

| Element                              | Suggested JSON Key          | Notes                                                          |
| ------------------------------------ | --------------------------- | -------------------------------------------------------------- |
| Plan name                            | `name`                      | e.g. `"Freelancer"`                                            |
| Featured badge (e.g. "Most popular") | `badgeLabel` + `isFeatured` | optional text label with a boolean to control display          |
| Subtitle / Description               | `subtitle`                  | e.g. `"The essentials to provide your best work for clients."` |
| Price                                | `priceMonthly`              | numeric (e.g. 19)                                              |
| Price unit                           | `priceUnit`                 | e.g. `"month"`                                                 |
| Call-to-action button text           | `ctaLabel`                  | e.g. `"Buy plan"`                                              |
| Feature list                         | `features`                  | array of strings                                               |
| Border / highlight color (optional)  | `highlightColor`            | optional, in case you want to color-code featured plans        |
