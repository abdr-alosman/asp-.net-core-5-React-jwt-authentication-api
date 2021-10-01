# asp-.net-core-5-React-jwt-authentication-api
<ul>
<li>Asp .net Core5</li>
<li>React</li>
<li>JSON Web Tokens</li>
</ul>

<b> JWT (JSON Web Tokens) Nedir? Ne işe yarar?</b></br>

JWT (JSON Web Tokens), IETF kuruluşu tarafından tasarlanan standart bir token biçimidir (Bkz. RFC 7519). Haberleşen iki veya daha fazla sistem (Web, Mobile, IOT, Cloud vb.) arasında kullanıcı doğrulama, kullanıcı tanıma, veri bütünlüğünü ve bilgi güvenliğini koruma gibi noktalarda kullanılmaktadır.

<b>JWT’nin avantajları:</b></br>
<ul>
<li>JSON kullanması</li>
<li>URL üzerinde taşınabilmesi</li>
<li>Web çerezleri kullanma zorunluluğu olmaması</li>
<li>CSRF ataklarına karşı daha kapalı olması</li>
<li>Hızlı doğrulama yapılabilmesi</li>
<li>Kolay ölçeklenebilir olması</li>
<li>Veri bütünlüğünü sağlaması</li>
<li>Web uygulamaları açısından HTTP session gerekmemesi, stateless kullanıma uygun olması
</li>
</ul>

<b>JWT’nin yapısı</b>
JWT, Base64 biçiminde kodlanmış 3 ayrı JSON parçasından oluşmaktadır. Parçalar nokta (.) sembolüyle ayrılmakta ve bir bütün olarak JWT’yi temsil etmektedir.

