var gdjs;(function(C){const c=class{constructor(){this.vertices=[];this.edges=[];this.center=[0,0]}move(t,s){for(let o=0,i=this.vertices.length;o<i;++o)this.vertices[o][0]+=t,this.vertices[o][1]+=s}rotate(t){let s=0;const o=Math.cos(-t),i=Math.sin(-t);for(let a=0,e=this.vertices.length;a<e;++a)s=this.vertices[a][0],this.vertices[a][0]=s*o+this.vertices[a][1]*i,this.vertices[a][1]=-s*i+this.vertices[a][1]*o}computeEdges(){for(;this.edges.length<this.vertices.length;)this.edges.push([0,0]);this.edges.length!=this.vertices.length&&(this.edges.length=this.vertices.length);for(let t=0,s=this.vertices.length;t<s;++t){const o=this.vertices[t],i=t+1>=s?this.vertices[0]:this.vertices[t+1];this.edges[t][0]=i[0]-o[0],this.edges[t][1]=i[1]-o[1]}}isConvex(){this.computeEdges();const t=this.edges.length;if(t<3)return!1;const s=this.edges[0][0]*this.edges[0+1][1]-this.edges[0][1]*this.edges[0+1][0]>0;for(let i=1;i<t-1;++i)if(this.edges[i][0]*this.edges[i+1][1]-this.edges[i][1]*this.edges[i+1][0]>0!==s)return!1;return this.edges[t-1][0]*this.edges[0][1]-this.edges[t-1][1]*this.edges[0][0]>0===s}computeCenter(){this.center[0]=0,this.center[1]=0;const t=this.vertices.length;for(let s=0;s<t;++s)this.center[0]+=this.vertices[s][0],this.center[1]+=this.vertices[s][1];return this.center[0]/=t,this.center[1]/=t,this.center}static createRectangle(t,s){const o=new C.Polygon;return o.vertices.push([-t/2,-s/2]),o.vertices.push([+t/2,-s/2]),o.vertices.push([+t/2,+s/2]),o.vertices.push([-t/2,+s/2]),o}static collisionTest(t,s,o){t.computeEdges(),s.computeEdges();let i=c.collisionTestStatics.edge;const a=c.collisionTestStatics.move_axis,e=c.collisionTestStatics.result;let n=Number.MAX_VALUE;i[0]=0,i[1]=0,i[0]=0,i[1]=0,e.collision=!1,e.move_axis[0]=0,e.move_axis[1]=0;for(let m=0,g=t.vertices.length,v=s.vertices.length;m<g+v;m++){m<g?i=t.edges[m]:i=s.edges[m-g];const d=c.collisionTestStatics.axis;d[0]=-i[1],d[1]=i[0],c.normalise(d);const x=c.collisionTestStatics.minMaxA,S=c.collisionTestStatics.minMaxB;c.project(d,t,x),c.project(d,s,S);const r=c.distance(x[0],x[1],S[0],S[1]);if(r>0||r===0&&o)return e.collision=!1,e.move_axis[0]=0,e.move_axis[1]=0,e;const h=Math.abs(r);h<n&&(n=h,a[0]=d[0],a[1]=d[1])}e.collision=!0;const f=t.computeCenter(),l=s.computeCenter(),P=[f[0]-l[0],f[1]-l[1]];return c.dotProduct(P,a)<0&&(a[0]=-a[0],a[1]=-a[1]),e.move_axis[0]=a[0]*n,e.move_axis[1]=a[1]*n,e}static raycastTest(t,s,o,i,a){const e=c.raycastTestStatics.result;if(e.collision=!1,t.vertices.length<2)return e;t.computeEdges();const n=c.raycastTestStatics.p,f=c.raycastTestStatics.q,l=c.raycastTestStatics.r,P=c.raycastTestStatics.s;let m=Number.MAX_VALUE;n[0]=s,n[1]=o,l[0]=i-s,l[1]=a-o;for(let g=0;g<t.edges.length;g++){f[0]=t.vertices[g][0],f[1]=t.vertices[g][1],P[0]=t.edges[g][0],P[1]=t.edges[g][1];const v=c.raycastTestStatics.deltaQP;v[0]=f[0]-n[0],v[1]=f[1]-n[1];const d=c.crossProduct(l,P),x=c.crossProduct(v,P)/d,S=c.crossProduct(v,l)/d;if(Math.abs(d)<=1e-4&&Math.abs(c.crossProduct(v,l))<=1e-4){const r=c.raycastTestStatics.axis;r[0]=l[0],r[1]=l[1],c.normalise(r);const h=0,u=c.dotProduct(r,l),p=c.dotProduct(r,v),q=c.dotProduct(r,[v[0]+P[0],v[1]+P[1]]),D=Math.max(Math.min(h,u),Math.min(p,q)),y=Math.min(Math.max(h,u),Math.max(p,q));if(D>y)return e;e.collision=!0,u===0&&(e.closeX=s,e.closeY=o,e.closeSqDist=0,e.farX=s,e.farY=o,e.farSqDist=0);const F=D/Math.abs(u),M=y/Math.abs(u);return e.closeX=s+F*l[0],e.closeY=o+F*l[1],e.closeSqDist=F*F*(l[0]*l[0]+l[1]*l[1]),e.farX=s+M*l[0],e.farY=o+M*l[1],e.farSqDist=M*M*(l[0]*l[0]+l[1]*l[1]),e}else if(d!==0&&0<=x&&x<=1&&0<=S&&S<=1){const r=n[0]+x*l[0],h=n[1]+x*l[1],u=(r-s)*(r-s)+(h-o)*(h-o);u<m?(e.collision||(e.farX=r,e.farY=h,e.farSqDist=u),m=u,e.closeX=r,e.closeY=h,e.closeSqDist=u,e.collision=!0):(e.farX=r,e.farY=h,e.farSqDist=u)}}return e}static normalise(t){const s=Math.sqrt(t[0]*t[0]+t[1]*t[1]);s!=0&&(t[0]/=s,t[1]/=s)}static dotProduct(t,s){return t[0]*s[0]+t[1]*s[1]}static crossProduct(t,s){return t[0]*s[1]-t[1]*s[0]}static project(t,s,o){let i=c.dotProduct(t,s.vertices[0]);o[0]=i,o[1]=i;for(let a=1,e=s.vertices.length;a<e;++a)i=c.dotProduct(t,s.vertices[a]),i<o[0]?o[0]=i:i>o[1]&&(o[1]=i)}static distance(t,s,o,i){return t<o?o-s:t-i}static isPointInside(t,s,o){let i=!1;for(let a=0,e=t.vertices.length-1;a<t.vertices.length;e=a++){let n=t.vertices[a],f=t.vertices[e];n[1]>o!=f[1]>o&&s<(f[0]-n[0])*(o-n[1])/(f[1]-n[1])+n[0]&&(i=!i)}return i}};let T=c;T.collisionTestStatics={minMaxA:[0,0],minMaxB:[0,0],edge:[0,0],axis:[0,0],move_axis:[0,0],result:{collision:!1,move_axis:[0,0]}},T.raycastTestStatics={p:[0,0],q:[0,0],r:[0,0],s:[0,0],deltaQP:[0,0],axis:[0,0],result:{collision:!1,closeX:0,closeY:0,closeSqDist:0,farX:0,farY:0,farSqDist:0}},C.Polygon=T})(gdjs||(gdjs={}));
//# sourceMappingURL=polygon.js.map