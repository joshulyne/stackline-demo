import React from "react";
import Image from "next/image";

import stacklineLogo from "../../img/stacklineLogo.svg";

const Header = (): JSX.Element => {
  return (
    <div className="bg-gray-900 py-5 pl-5 pr-6">
      <Image src={stacklineLogo} height={40} alt={""} />
    </div>
  );
};

export default Header;
