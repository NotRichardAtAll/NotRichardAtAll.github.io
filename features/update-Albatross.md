# v0.1.0 - 2023-10-20 [update-Albatross] 🐦

The very first update

## 🚀 New Features
### Pages
- [Home Page](/home) `[WIP]` - Basic layout placeholder
- [Construction Page](/under-construction) `[Public]` - Maintenance notice page

## 🛠️ Improvements
- Optimized project initialization process

## Legend
- `[Auth]` `Red` Requires authorization *(access token needed)*
- `[Public]` `Green` Open to all visitors
- `[WIP]` `Orange` Work in progress
- `[Beta]` `Yellow` Experimental feature

## Current/planned State Diagram
```mermaid
stateDiagram-v2
    classDef Auth fill:#fee2e2,stroke:#dc2626,stroke-width:2px
    classDef Public fill:#bbf7d0,stroke:#16a34a,stroke-width:2px
    classDef WIP fill:#fed7aa,stroke:#ea580c,stroke-width:2px,stroke-dasharray: 5 5
    classDef Beta fill:#fef08a,stroke:#ca8a04,stroke-width:2px

    [*] --> HomePage
    HomePage --> ConstructionPage : Maintenance Mode
    HomePage --> LoginPage : User Auth
    HomePage --> ProfilePage : Cookie Exists?

    state "Home Page (WIP)" as HomePage {
        [*] --> Landing
        Landing --> Search : OnInput
        Search --> Details : onClick
        Details --> Landing : Back
    }

    state "Construction Page (Public)" as ConstructionPage {
        [*] --> Enter
        Enter --> Token
        Token --> ShowMarkdown : correctToken
    }

    class HomePage,ProfilePage WIP
    class ConstructionPage Public
    class LoginPage Auth
    class Details Beta

    note left of HomePage
    Progress：
    • Struct completed
    • TODO
    end note
```