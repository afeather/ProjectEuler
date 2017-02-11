// How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?

for (y=1901,m=0,d=1,c=0;y<2001;){d=(d+(m==1?((y%400==0)||(y%100!=0&&y%4==0)?29:28):(m==3||m==5||m==8||m==10?30:31)))%7;m==11?y++:y;m=(m+1)%12;d==6?c++:c;}
