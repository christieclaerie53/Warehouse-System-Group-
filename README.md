<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
  <h1>Warehouse-System-Group</h1>

  <h2>Sprint 0 — Setup (not official sprint)</h2>
  <p>Tasks:</p>
  <ul>
    <li>Tetapkan skop (spec doc)</li>
    <li>Install semua tools asas</li>
  </ul>
  <p>Output:</p>
  <ul>
    <li>Environment ready, Git repo created</li>
  </ul>

  <h2>Sprint 1 — Foundation Data</h2>
  <p>Tasks:</p>
  <ul>
    <li>Setup MySQL + schema</li>
    <li>Setup Supabase + table sensor</li>
    <li>Setup MQTT + Node-RED simulation</li>
  </ul>
  <p>Sprint Goal:</p>
  <ul>
    <li>Data suhu simulasi mengalir masuk ke Supabase</li>
  </ul>
  <p>Definition of Done:</p>
  <ul>
    <li>Data live visible in Supabase table editor</li>
  </ul>

  <h2>Sprint 2 — Backend API</h2>
  <p>Tasks:</p>
  <ul>
    <li>Auth (register/login + JWT)</li>
    <li>CRUD produk</li>
    <li>Endpoint baca suhu (atau guna Supabase API)</li>
  </ul>
  <p>Sprint Goal:</p>
  <ul>
    <li>Semua endpoint boleh ditest dalam Postman</li>
  </ul>
  <p>Definition of Done:</p>
  <ul>
    <li>Postman collection lulus semua test case</li>
  </ul>

  <h2>Sprint 3 — Web (React)</h2>
  <p>Tasks:</p>
  <ul>
    <li>Sign up/login page</li>
    <li>Dashboard (suhu + graf)</li>
    <li>Add/remove produk</li>
  </ul>
  <p>Sprint Goal:</p>
  <ul>
    <li>Web berfungsi penuh, boleh demo</li>
  </ul>
  <p>Definition of Done:</p>
  <ul>
    <li>User boleh login dan urus produk melalui web</li>
  </ul>

  <h2>Sprint 4 — Mobile (Flutter) + Polish</h2>
  <p>Tasks:</p>
  <ul>
    <li>Login, dashboard ringkas, senarai produk (Flutter)</li>
    <li>Kawal on/off</li>
    <li>Alert stok rendah</li>
    <li>Uji end-to-end, siapkan demo</li>
  </ul>
  <p>Sprint Goal:</p>
  <ul>
    <li>Web + mobile + embedded simulation berfungsi serentak untuk demo</li>
  </ul>
  <p>Definition of Done:</p>
  <ul>
    <li>Demo penuh berjalan tanpa crash</li>
  </ul>

</body>
</html>
