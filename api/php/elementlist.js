
var ApiGen = ApiGen || {};
ApiGen.elements = [["c","ArrayAccess"],["c","ArrayObject"],["c","Countable"],["c","Exception"],["c","IteratorAggregate"],["c","Saklient\\Cloud\\API"],["c","Saklient\\Cloud\\Enums\\EApplianceClass"],["c","Saklient\\Cloud\\Enums\\EAvailability"],["c","Saklient\\Cloud\\Enums\\EDiskConnection"],["c","Saklient\\Cloud\\Enums\\EScope"],["c","Saklient\\Cloud\\Enums\\EScriptClass"],["c","Saklient\\Cloud\\Enums\\EServerInstanceStatus"],["c","Saklient\\Cloud\\Enums\\EStorageClass"],["c","Saklient\\Cloud\\Errors\\AccessApiKeyDisabledException"],["c","Saklient\\Cloud\\Errors\\AccessSakuraException"],["c","Saklient\\Cloud\\Errors\\AccessStaffException"],["c","Saklient\\Cloud\\Errors\\AccessTokenException"],["c","Saklient\\Cloud\\Errors\\AccessXhrOrApiKeyException"],["c","Saklient\\Cloud\\Errors\\AccountNotFoundException"],["c","Saklient\\Cloud\\Errors\\AccountNotSpecifiedException"],["c","Saklient\\Cloud\\Errors\\AmbiguousIdentifierException"],["c","Saklient\\Cloud\\Errors\\AmbiguousZoneException"],["c","Saklient\\Cloud\\Errors\\ApiProxyTimeoutException"],["c","Saklient\\Cloud\\Errors\\ApiProxyTimeoutNonGetException"],["c","Saklient\\Cloud\\Errors\\ArchiveIsIncompleteException"],["c","Saklient\\Cloud\\Errors\\BootFailureByLockException"],["c","Saklient\\Cloud\\Errors\\BootFailureInGroupException"],["c","Saklient\\Cloud\\Errors\\BusyException"],["c","Saklient\\Cloud\\Errors\\CantResizeSmallerException"],["c","Saklient\\Cloud\\Errors\\CdromDeviceLockedException"],["c","Saklient\\Cloud\\Errors\\CdromDisabledException"],["c","Saklient\\Cloud\\Errors\\CdromInUseException"],["c","Saklient\\Cloud\\Errors\\CdromIsIncompleteException"],["c","Saklient\\Cloud\\Errors\\ConnectToSameSwitchException"],["c","Saklient\\Cloud\\Errors\\ContractCreationException"],["c","Saklient\\Cloud\\Errors\\CopyToItselfException"],["c","Saklient\\Cloud\\Errors\\DeleteDiskB4TemplateException"],["c","Saklient\\Cloud\\Errors\\DeleteIpV6NetsFirstException"],["c","Saklient\\Cloud\\Errors\\DeleteResB4AccountException"],["c","Saklient\\Cloud\\Errors\\DeleteRouterB4SwitchException"],["c","Saklient\\Cloud\\Errors\\DeleteStaticRouteFirstException"],["c","Saklient\\Cloud\\Errors\\DisabledInSandboxException"],["c","Saklient\\Cloud\\Errors\\DisconnectB4DeleteException"],["c","Saklient\\Cloud\\Errors\\DisconnectB4UpdateException"],["c","Saklient\\Cloud\\Errors\\DiskConnectionLimitException"],["c","Saklient\\Cloud\\Errors\\DiskIsCopyingException"],["c","Saklient\\Cloud\\Errors\\DiskIsNotAvailableException"],["c","Saklient\\Cloud\\Errors\\DiskLicenseMismatchException"],["c","Saklient\\Cloud\\Errors\\DiskOrSsInMigrationException"],["c","Saklient\\Cloud\\Errors\\DiskStockRunOutException"],["c","Saklient\\Cloud\\Errors\\DnsAaaaRecordNotFoundException"],["c","Saklient\\Cloud\\Errors\\DnsARecordNotFoundException"],["c","Saklient\\Cloud\\Errors\\DnsPtrUpdateFailureException"],["c","Saklient\\Cloud\\Errors\\DontCreateInSandboxException"],["c","Saklient\\Cloud\\Errors\\DuplicateAccountCodeException"],["c","Saklient\\Cloud\\Errors\\DuplicateEntryException"],["c","Saklient\\Cloud\\Errors\\DuplicateUserCodeException"],["c","Saklient\\Cloud\\Errors\\FileNotUploadedException"],["c","Saklient\\Cloud\\Errors\\FilterArrayComparisonException"],["c","Saklient\\Cloud\\Errors\\FilterBadOperatorException"],["c","Saklient\\Cloud\\Errors\\FilterNullComparisonException"],["c","Saklient\\Cloud\\Errors\\FilterUnknownOperatorException"],["c","Saklient\\Cloud\\Errors\\FtpCannotCloseException"],["c","Saklient\\Cloud\\Errors\\FtpIsAlreadyCloseException"],["c","Saklient\\Cloud\\Errors\\FtpIsAlreadyOpenException"],["c","Saklient\\Cloud\\Errors\\FtpMustBeClosedException"],["c","Saklient\\Cloud\\Errors\\HostOperationFailureException"],["c","Saklient\\Cloud\\Errors\\IllegalDasUsageException"],["c","Saklient\\Cloud\\Errors\\InMigrationException"],["c","Saklient\\Cloud\\Errors\\InvalidFormatException"],["c","Saklient\\Cloud\\Errors\\InvalidParamCombException"],["c","Saklient\\Cloud\\Errors\\InvalidRangeException"],["c","Saklient\\Cloud\\Errors\\InvalidUriArgumentException"],["c","Saklient\\Cloud\\Errors\\IpV6NetAlreadyAttachedException"],["c","Saklient\\Cloud\\Errors\\LimitCountInAccountException"],["c","Saklient\\Cloud\\Errors\\LimitCountInMemberException"],["c","Saklient\\Cloud\\Errors\\LimitCountInNetworkException"],["c","Saklient\\Cloud\\Errors\\LimitCountInRouterException"],["c","Saklient\\Cloud\\Errors\\LimitCountInZoneException"],["c","Saklient\\Cloud\\Errors\\LimitMemoryInAccountException"],["c","Saklient\\Cloud\\Errors\\LimitSizeInAccountException"],["c","Saklient\\Cloud\\Errors\\MissingIsoImageException"],["c","Saklient\\Cloud\\Errors\\MissingParamException"],["c","Saklient\\Cloud\\Errors\\MustBeOfSameZoneException"],["c","Saklient\\Cloud\\Errors\\NoDisplayResponseException"],["c","Saklient\\Cloud\\Errors\\NotForRouterException"],["c","Saklient\\Cloud\\Errors\\NotReplicatingException"],["c","Saklient\\Cloud\\Errors\\NotWithHybridconnException"],["c","Saklient\\Cloud\\Errors\\OldStoragePlanException"],["c","Saklient\\Cloud\\Errors\\OperationFailureException"],["c","Saklient\\Cloud\\Errors\\OperationTimeoutException"],["c","Saklient\\Cloud\\Errors\\OriginalHashMismatchException"],["c","Saklient\\Cloud\\Errors\\PacketFilterApplyingException"],["c","Saklient\\Cloud\\Errors\\PacketFilterVersionMismatchException"],["c","Saklient\\Cloud\\Errors\\ParamIpNotFoundException"],["c","Saklient\\Cloud\\Errors\\ParamResNotFoundException"],["c","Saklient\\Cloud\\Errors\\PaymentCreditCardException"],["c","Saklient\\Cloud\\Errors\\PaymentPaymentException"],["c","Saklient\\Cloud\\Errors\\PaymentRegistrationException"],["c","Saklient\\Cloud\\Errors\\PaymentTelCertificationException"],["c","Saklient\\Cloud\\Errors\\PaymentUnpayableException"],["c","Saklient\\Cloud\\Errors\\PenaltyOperationException"],["c","Saklient\\Cloud\\Errors\\ReplicaAlreadyExistsException"],["c","Saklient\\Cloud\\Errors\\ReplicaNotFoundException"],["c","Saklient\\Cloud\\Errors\\ResAlreadyConnectedException"],["c","Saklient\\Cloud\\Errors\\ResAlreadyDisconnectedException"],["c","Saklient\\Cloud\\Errors\\ResAlreadyExistsException"],["c","Saklient\\Cloud\\Errors\\ResourcePathNotFoundException"],["c","Saklient\\Cloud\\Errors\\ResUsedInZoneException"],["c","Saklient\\Cloud\\Errors\\RunOutOfIpAddressException"],["c","Saklient\\Cloud\\Errors\\SameLicenseRequiredException"],["c","Saklient\\Cloud\\Errors\\ServerCouldNotStopException"],["c","Saklient\\Cloud\\Errors\\ServerIsCleaningException"],["c","Saklient\\Cloud\\Errors\\ServerOperationFailureException"],["c","Saklient\\Cloud\\Errors\\ServerPowerMustBeDownException"],["c","Saklient\\Cloud\\Errors\\ServerPowerMustBeUpException"],["c","Saklient\\Cloud\\Errors\\ServiceTemporarilyUnavailableException"],["c","Saklient\\Cloud\\Errors\\SizeMismatchException"],["c","Saklient\\Cloud\\Errors\\SnapshotInMigrationException"],["c","Saklient\\Cloud\\Errors\\StillCreatingException"],["c","Saklient\\Cloud\\Errors\\StorageAbnormalException"],["c","Saklient\\Cloud\\Errors\\StorageOperationFailureException"],["c","Saklient\\Cloud\\Errors\\SwitchHybridConnectedException"],["c","Saklient\\Cloud\\Errors\\TemplateFtpIsOpenException"],["c","Saklient\\Cloud\\Errors\\TemplateIsIncompleteException"],["c","Saklient\\Cloud\\Errors\\TooManyRequestException"],["c","Saklient\\Cloud\\Errors\\UnknownException"],["c","Saklient\\Cloud\\Errors\\UnknownOsTypeException"],["c","Saklient\\Cloud\\Errors\\UnsupportedResClassException"],["c","Saklient\\Cloud\\Errors\\UserNotSpecifiedException"],["c","Saklient\\Cloud\\Errors\\VncProxyRequestFailureException"],["c","Saklient\\Cloud\\Facility"],["c","Saklient\\Cloud\\Models\\Model_Appliance"],["c","Saklient\\Cloud\\Models\\Model_Archive"],["c","Saklient\\Cloud\\Models\\Model_Bridge"],["c","Saklient\\Cloud\\Models\\Model_Disk"],["c","Saklient\\Cloud\\Models\\Model_DiskPlan"],["c","Saklient\\Cloud\\Models\\Model_Icon"],["c","Saklient\\Cloud\\Models\\Model_Iface"],["c","Saklient\\Cloud\\Models\\Model_Ipv6Net"],["c","Saklient\\Cloud\\Models\\Model_IsoImage"],["c","Saklient\\Cloud\\Models\\Model_License"],["c","Saklient\\Cloud\\Models\\Model_LicenseInfo"],["c","Saklient\\Cloud\\Models\\Model_Region"],["c","Saklient\\Cloud\\Models\\Model_Router"],["c","Saklient\\Cloud\\Models\\Model_RouterPlan"],["c","Saklient\\Cloud\\Models\\Model_Script"],["c","Saklient\\Cloud\\Models\\Model_Server"],["c","Saklient\\Cloud\\Models\\Model_ServerPlan"],["c","Saklient\\Cloud\\Models\\Model_Swytch"],["c","Saklient\\Cloud\\Product"],["c","Saklient\\Cloud\\Resources\\Appliance"],["c","Saklient\\Cloud\\Resources\\Archive"],["c","Saklient\\Cloud\\Resources\\Bridge"],["c","Saklient\\Cloud\\Resources\\Disk"],["c","Saklient\\Cloud\\Resources\\DiskConfig"],["c","Saklient\\Cloud\\Resources\\DiskPlan"],["c","Saklient\\Cloud\\Resources\\FtpInfo"],["c","Saklient\\Cloud\\Resources\\Icon"],["c","Saklient\\Cloud\\Resources\\Iface"],["c","Saklient\\Cloud\\Resources\\Ipv4Net"],["c","Saklient\\Cloud\\Resources\\Ipv6Net"],["c","Saklient\\Cloud\\Resources\\IsoImage"],["c","Saklient\\Cloud\\Resources\\LbServer"],["c","Saklient\\Cloud\\Resources\\LbVirtualIp"],["c","Saklient\\Cloud\\Resources\\License"],["c","Saklient\\Cloud\\Resources\\LicenseInfo"],["c","Saklient\\Cloud\\Resources\\LoadBalancer"],["c","Saklient\\Cloud\\Resources\\Region"],["c","Saklient\\Cloud\\Resources\\Router"],["c","Saklient\\Cloud\\Resources\\RouterPlan"],["c","Saklient\\Cloud\\Resources\\Script"],["c","Saklient\\Cloud\\Resources\\Server"],["c","Saklient\\Cloud\\Resources\\ServerInstance"],["c","Saklient\\Cloud\\Resources\\ServerPlan"],["c","Saklient\\Cloud\\Resources\\Swytch"],["c","Saklient\\Cloud\\Resources\\VpcRouter"],["c","Saklient\\Errors\\ExceptionFactory"],["c","Saklient\\Errors\\HttpBadGatewayException"],["c","Saklient\\Errors\\HttpBadRequestException"],["c","Saklient\\Errors\\HttpConflictException"],["c","Saklient\\Errors\\HttpException"],["c","Saklient\\Errors\\HttpExpectationFailedException"],["c","Saklient\\Errors\\HttpFailedDependencyException"],["c","Saklient\\Errors\\HttpForbiddenException"],["c","Saklient\\Errors\\HttpGatewayTimeoutException"],["c","Saklient\\Errors\\HttpGoneException"],["c","Saklient\\Errors\\HttpHttpVersionNotSupportedException"],["c","Saklient\\Errors\\HttpInsufficientStorageException"],["c","Saklient\\Errors\\HttpInternalServerErrorException"],["c","Saklient\\Errors\\HttpLengthRequiredException"],["c","Saklient\\Errors\\HttpLockedException"],["c","Saklient\\Errors\\HttpMethodNotAllowedException"],["c","Saklient\\Errors\\HttpNotAcceptableException"],["c","Saklient\\Errors\\HttpNotExtendedException"],["c","Saklient\\Errors\\HttpNotFoundException"],["c","Saklient\\Errors\\HttpNotImplementedException"],["c","Saklient\\Errors\\HttpPaymentRequiredException"],["c","Saklient\\Errors\\HttpPreconditionFailedException"],["c","Saklient\\Errors\\HttpProxyAuthenticationRequiredException"],["c","Saklient\\Errors\\HttpRequestedRangeNotSatisfiableException"],["c","Saklient\\Errors\\HttpRequestEntityTooLargeException"],["c","Saklient\\Errors\\HttpRequestTimeoutException"],["c","Saklient\\Errors\\HttpRequestUriTooLongException"],["c","Saklient\\Errors\\HttpServiceUnavailableException"],["c","Saklient\\Errors\\HttpUnauthorizedException"],["c","Saklient\\Errors\\HttpUnprocessableEntityException"],["c","Saklient\\Errors\\HttpUnsupportedMediaTypeException"],["c","Saklient\\Errors\\HttpUpgradeRequiredException"],["c","Saklient\\Errors\\HttpVariantAlsoNegotiatesException"],["c","Saklient\\Errors\\SaklientException"],["c","Saklient\\Util"],["c","Serializable"],["c","Traversable"]];
