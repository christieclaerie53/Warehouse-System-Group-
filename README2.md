# Warehouse-System-Group

## Sprint Plan

### Sprint 0 — Setup (not official sprint)
**Tasks**
1. Tetapkan skop (spec doc)
2. Install semua tools asas  

**Output**
- Environment ready, Git repo created  

---

### Sprint 1 — Foundation Data
**Tasks**
1. Setup MySQL + schema
2. Setup Supabase + table sensor
3. Setup MQTT + Node-RED simulation  

**Sprint Goal**
- Data suhu simulasi mengalir masuk ke Supabase  

**Definition of Done**
- Data live visible in Supabase table editor  

---

### Sprint 2 — Backend API
**Tasks**
1. Auth (register/login + JWT)
2. CRUD produk
3. Endpoint baca suhu (atau guna Supabase API)  

**Sprint Goal**
- Semua endpoint boleh ditest dalam Postman  

**Definition of Done**
- Postman collection lulus semua test case  

---

### Sprint 3 — Web (React)
**Tasks**
1. Sign up/login page
2. Dashboard (suhu + graf)
3. Add/remove produk  

**Sprint Goal**
- Web berfungsi penuh, boleh demo  

**Definition of Done**
- User boleh login dan urus produk melalui web  

---

### Sprint 4 — Mobile (Flutter) + Polish
**Tasks**
1. Login, dashboard ringkas, senarai produk (Flutter)
2. Kawal on/off
3. Alert stok rendah
4. Uji end-to-end, siapkan demo  

**Sprint Goal**
- Web + mobile + embedded simulation berfungsi serentak untuk demo  

**Definition of Done**
- Demo penuh berjalan tanpa crash  
